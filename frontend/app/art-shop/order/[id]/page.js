'use client'

import { useState, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import resolveConfig from 'tailwindcss/resolveConfig'
import twConfig from '@/tailwind.config.js'
import Image from 'next/image'
import Dialog from '@/components/Dialog'
import BackButton from '@/components/BackButton'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ky from '@/ky'
import { usePicturesContext } from '../../PicturesProvider'
import { generateAltText, generateAuthorLabel } from '@/components/Picture'
import { useWindowSize } from '@react-hook/window-size'

function getImageHeight(windowWidth, windowHeight, imageRatio, infoWidth, marginX, marginY) {
  const imageHeight = Math.min(windowHeight - marginY, (windowWidth - marginX - infoWidth) / imageRatio)
  return imageHeight
}

export default function OrderById({ params: {id} }) {
  const [showDialog, setShowDialog] = useState(true)
  const pictures = usePicturesContext()
  const picture = useMemo(() => pictures.data.find(pic => pic.id === Number(id)))

  const [windowWidth, windowHeight] = useWindowSize()

  const ratio = picture.image.width / picture.image.height
  const imageHeight = getImageHeight(windowWidth, windowHeight, ratio, 400, 50, 50)
  const imageWidth = imageHeight * ratio

  const twConfigResolved = useMemo(() => resolveConfig(twConfig))
  const isMg = windowWidth <= parseInt(twConfigResolved.theme.screens.mg.max)
  const isMd = windowWidth <= parseInt(twConfigResolved.theme.screens.md.max)

  return (
    <Dialog closeUrl="/art-shop" showDialog={showDialog} setShowDialog={setShowDialog} className="scrollbar-hide">
      <div
        className="relative flex items-start mg:flex-col mg:h-full scrollbar-hide"
        style={(
          !isMg ? {
            width: imageWidth + 400,
            height: imageHeight,
          } : (isMd ? { width: '100vw' } : {})
        )}
      >
        <BackButton
          chip
          className="absolute mg:sticky top-[20px] left-[20px] z-[1]"
          onClick={() => setShowDialog(false)}
        />
        <div
          className="mg:mt-[-60px] relative rounded-[40px] overflow-hidden mg:w-full"
          style={!isMg ? {
              width: imageWidth,
              height: imageHeight,
            } : {
              aspectRatio: ratio,
            }
          }
        >
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + picture.image.url}
            fill
            alt={generateAltText(picture)}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col p-[40px] justify-between w-[400px] mg:w-full h-[inherit] overflow-y-scroll scrollbar-hide gap-[20px]">
          <div className="flex flex-col gap-[20px]"> {/* title, description, etc. */}
            <div className="flex flex-col gap-[15px]">
              <h2 className="text-[40px] font-semibold mt-[-13px] mb-[-10px]">{picture.title}</h2>
              <span className="text-[21px] font-medium">
                {generateAuthorLabel(picture.author)}
              </span>
            </div>
            <p className="text-[21px]">
              {picture.description}
            </p>
          </div>
          <div className="flex flex-col gap-[15px]"> {/* buttons */}
            <Button compact type="submit">
              <Image
                src="/coins-stacked-03-gray-02.svg"
                alt="coins-stacked"
                width={24} height={24}
              />
              Купить за 1 000 ₽
            </Button>
            <Button compact type="submit" className="dark:bg-[#1868B7] dark:text-white">
              <Image
                src="/opensea.svg"
                alt="opensea-logo"
                width={24} height={24}
              />
              Купить в виде NFT
            </Button>            
          </div>
        </div>
      </div>
    </Dialog>
  )
}
