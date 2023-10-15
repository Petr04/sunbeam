'use client'

import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import { usePictureContext } from './PictureProvider'
import PictureTitle from '@/components/PictureTitle'

export default function OrderById() {
  const picture = usePictureContext()

  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <PictureTitle picture={picture} />
        <p className="text-[21px]">
          {picture.description}
        </p>
      </div>
      <div className="flex flex-col gap-[15px]"> {/* buttons */}
        <Link href={`/art-shop/order/${picture.id}/buy`} scroll={false} className="w-full">
          <Button compact type="submit" className="w-full dark:bg-primary dark:text-gray-04">
            <Image
              src="/coins-stacked-03-gray-04.svg"
              alt="coins-stacked"
              width={24} height={24}
            />
            Купить за 1 000 ₽
          </Button>
        </Link>
        <Button compact type="submit">
          <Image
            src="/opensea.svg"
            alt="opensea-logo"
            width={24} height={24}
          />
          Купить в виде NFT
        </Button>            
      </div>
    </>
  )
}
