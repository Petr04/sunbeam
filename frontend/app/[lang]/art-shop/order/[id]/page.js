'use client'

import { useState, useEffect } from 'react'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import { usePictureContext } from './PictureProvider'
import PictureTitle from '@/components/picture/PictureTitle'
import ky from '@/ky'

function nftAddressToUrl(nftAddress, nftTokenId) {
  return `https://testnet.rarible.com/token/polygon/${nftAddress}:${nftTokenId}`
}

async function getNftTokenId(nftId) {
  if (!nftId) return null
  const response = await ky.get(`api/nft-token-id/${nftId}`).json()
  return response
}

export default function OrderById() {
  const picture = usePictureContext()

  const [nftTokenId, setNftTokenId] = useState(picture.nftTokenId || null)
  useEffect(() => {
    if (!nftTokenId) {
      getNftTokenId(picture.nftId).then(value => {
        setNftTokenId(value)
        picture.nftTokenId = value
      })
    }
  })

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
        {
          nftTokenId
            ? (
              <a target="_blank" href={nftAddressToUrl(picture.nftContractAddress, nftTokenId)} rel="noopener noreferrer">
                <Button compact type="submit" className="w-full">
                  <Image
                    src="/diamond-01-gray-02.svg"
                    alt="diamond"
                    width={24} height={24}
                  />
                  Купить в виде NFT
                </Button>
              </a>
            ) : null
        }
      </div>
    </>
  )
}
