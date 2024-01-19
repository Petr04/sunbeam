'use client'

import { useState, useMemo } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import twConfig from '@/tailwind.config.js'
import Image from 'next/image'
import Dialog from '@/components/Dialog'
import BackButton from '@/components/BackButton'
import { usePicturesContext } from '../../PicturesProvider'
import PictureProvider from './PictureProvider'
import generateAltText from '@/lib/generatePictureAltText'
import { useWindowSize } from '@react-hook/window-size'

function getImageHeight(windowWidth, windowHeight, imageRatio, infoWidth, marginX, marginY) {
  const imageHeight = Math.min(windowHeight - marginY, (windowWidth - marginX - infoWidth) / imageRatio)
  return imageHeight
}

export default function OrderByIdLayout({ children, params: {id} }) {
  const [showDialog, setShowDialog] = useState(true)
  const pictures = usePicturesContext()
  const picture = useMemo(() => pictures.data.find(pic => pic.id === Number(id)))

  const [windowWidth, windowHeight] = useWindowSize()

  const ratio = picture.image.width / picture.image.height
  const imageHeight = getImageHeight(windowWidth, windowHeight, ratio, 450, 50, 50)
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
            width: imageWidth + 450,
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
        <div className="flex flex-col p-[40px] justify-between w-[450px] mg:w-full h-[inherit] overflow-y-scroll scrollbar-hide gap-[20px]">
          <PictureProvider value={picture}>
            {children}
          </PictureProvider>
        </div>
      </div>
    </Dialog>
  )
}
