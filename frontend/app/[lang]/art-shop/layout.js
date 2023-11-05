import Link from 'next/link'
import Layout from '@/components/Layout'
import Pictures from '@/components/picture/Pictures'
import ky from '@/ky'
import { getDictionary } from '@/lib/dictionary'
import PicturesProvider from './PicturesProvider'
import Image from 'next/image'

export const revalidate = 2 // change in prod

export default async function ArtShopLayout({ children,  params: {lang} }) {
  const isArtShop = true

  let pictures = await ky.get('api/pictures?populate[0]=image&populate[1]=author&locale=ru').json()
  if (lang === "en") {
    pictures = await ky.get('api/pictures?populate[0]=image&populate[1]=author&locale=en').json()
  }

  const dict = await getDictionary(lang)

  return (
    <Layout dark lang={lang}>
      <PicturesProvider value={pictures}>
        {children}
      </PicturesProvider>
      <div className="flex flex-col gap-[50px] mx-auto max-w-[1300px] px-[10px] align-center">
        <div className="flex lg:flex-col gap-x-[70px] md:gap-y-[20px] justify-between px-[10px] w-fit mx-auto">
          <div className="w-fit md:hidden">
            <h1 className="text-[129px] mg:text-[100px] font-bold whitespace-nowrap">
              {dict.page.art_shop.heading}
            </h1>
            <img src="/art-shop-spiral.svg" className="w-full object-fill mg:hidden"/>
            <img src="/art-shop-spiral-medium.svg" className="hidden mg:block w-full object-fill"/>
          </div>
          <h1 className="hidden md:block text-[48px] font-bold whitespace-nowrap">{dict.page.art_shop.heading}</h1>
          <div className="flex flex-col gap-[20px] pt-[60px] mg:pt-[40px] md:pt-0 lg:w-[800px] mg:w-[570px] md:w-auto">
            <div className="flex flex-col gap-[10px] font-medium text-[24px]">
              <p>
                {dict.page.art_shop.description1}
              </p>
              <p>
                {dict.page.art_shop.description2}
              </p>
            </div>
            <Link href="/art-shop/order/new" scroll={false} className="w-fit">
              <button className="px-[30px] py-[10px] bg-gray-02 text-gray-04 rounded-[15px] font-semibold text-[20px]">
                {dict.page.art_shop.order_button}
              </button>
            </Link>
          </div>
        </div>
        <Image src="/art-shop-spiral-short.svg" className="object-scale-down hidden md:block" width={24} height={24}/>
        <Pictures pictures={pictures} isArtShop={isArtShop} />
      </div>
    </Layout>
  )
}
