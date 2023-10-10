'use client'

import { useState, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import Dialog from '@/components/Dialog'
import BackButton from '@/components/BackButton'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import ky from '@/ky'
import { usePicturesContext } from '../../PicturesProvider'
import { generateAltText, generateAuthorLabel } from '@/components/Picture'

export default function OrderById({ params: {id} }) {
  const [showDialog, setShowDialog] = useState(true)
  const pictures = usePicturesContext()
  const picture = useMemo(() => pictures.data.find(pic => pic.id === Number(id)))
  const dialogWidth = picture.image.width * 1.3
  const ratioDialog = dialogWidth / picture.image.height
  const infoWidth = picture.image.width * 0.3
  const ratioInfo = infoWidth / picture.image.height
  const ratio = picture.image.width / picture.image.height

  return (
    <Dialog closeUrl="/art-shop" showDialog={showDialog}>
      <div
        className="flex items-start relative"
        style={{
          width: `min(calc(100vw - 50px), calc(100vh - 50px) * ${ratioDialog})`,
          height: `min(calc(100vh - 50px), calc(100vw - 50px) / ${ratioDialog})`,
        }}
      >
        <BackButton
          chip
          className="absolute top-[20px] left-[20px] z-[1]"
          onClick={() => setShowDialog(false)}
        />
        <div
          className={`relative rounded-[40px] overflow-hidden w-auto h-[inherit]`}
          style={{ aspectRatio: ratio }}
        >
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + picture.image.url}
            fill
            alt={generateAltText(picture)}
            className="object-cover"
          />
        </div>
        <div
          className="flex flex-col mx-[40px] py-[40px] justify-between w-auto h-[inherit] overflow-y-scroll scrollbar-hide gap-[20px]"
          style={{ aspectRatio: ratioInfo }}
        >
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
