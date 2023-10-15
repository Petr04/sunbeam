import Link from 'next/link'
import Layout from '@/components/Layout'
import Pictures from '@/components/Pictures'
import ky from '@/ky'
import useMemo from 'react'
import PicturesProvider from './PicturesProvider'

export const revalidate = 2 // change in prod

export default async function ArtShopLayout({ children }) {
  const pictures = await ky.get('api/pictures?populate[0]=image&populate[1]=author').json()
  const isArtShop = true

  return (
    <Layout dark>
      <PicturesProvider value={pictures}>
        {children}
      </PicturesProvider>
      <div className="flex flex-col gap-[50px] mx-auto max-w-[1300px] px-[10px] align-center">
        <div className="flex lg:flex-col gap-x-[70px] md:gap-y-[20px] justify-between px-[10px] w-fit mx-auto">
          <div className="w-fit md:hidden">
            <h1 className="text-[129px] mg:text-[100px] font-bold whitespace-nowrap">Арт-лавка</h1>
            <img src="/art-shop-spiral.svg" className="w-full object-fill mg:hidden" />
            <img src="/art-shop-spiral-medium.svg" className="hidden mg:block w-full object-fill" />
          </div>
          <h1 className="hidden md:block text-[48px] font-bold whitespace-nowrap">Арт-лавка</h1>
          <div className="flex flex-col gap-[20px] pt-[60px] mg:pt-[40px] md:pt-0 lg:w-[800px] mg:w-[570px] md:w-auto">
            <div className="flex flex-col gap-[10px] font-medium text-[24px]">
              <p>
                Здесь вы можете приобрести работы наших учеников или заказать новую.
              </p>
              <p>
                Все средства будут направлены на поддержку студии.
              </p>
            </div>
            <Link href="/art-shop/order/new" scroll={false} className="w-fit">
              <button className="px-[30px] py-[10px] bg-gray-02 text-gray-04 rounded-[15px] font-semibold text-[20px]">
                Заказать картину
              </button>
            </Link>
          </div>
        </div>
        <img src="/art-shop-spiral-short.svg" className="object-scale-down hidden md:block" />
        <Pictures pictures={pictures} isArtShop={isArtShop} />
      </div>
    </Layout>
  )
}
