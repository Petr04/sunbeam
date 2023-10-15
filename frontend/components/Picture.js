import Image from 'next/image'
import Link from 'next/link'
import Badge from '@/components/Badge'
import PictureTitle from '@/components/PictureTitle'

export function generateAltText(picture) {
  return `${picture.technology}: ${picture.title}`
}

export default function Picture({ id, title, description, image, author, technology, isArtShop }) {
  const path = process.env.NEXT_PUBLIC_API_URL + image.url;

  return (
    <div suppressHydrationWarning={true} className="flex flex-col gap-[20px] p-[20px] bg-gray-03 rounded-[35px]">
      <Image
        alt={generateAltText({ technology, title })}
        src={path}
        width={343}
        height={343}
        className="w-full h-auto rounded-[15px]"
      />
      <Badge text={technology} />
      <PictureTitle picture={{ title, author }} />
      <Link href={`/art-shop/order/${id}`} scroll={false}>
        {isArtShop === true &&
          <button className="rounded-[17px] py-[13px] bg-gray-04 font-semibold text-[17px] shadow-md w-full">
            Купить
          </button>
        }
      </Link>
    </div>
  )
}
