import Link from 'next/link'
import Layout from '@/components/Layout'
import Pictures from '@/components/art-shop/Pictures'
import ky from '@/ky'

export const revalidate = 2 // change in prod

export default async function OurWorks({ children }) {
  const pictures = await ky.get('api/pictures?populate[0]=image&populate[1]=author').json()
  const isArtShop = false

  return (
    <Layout dark>
      {children}
      <div className="flex flex-col gap-[50px] mx-auto max-w-[1300px] px-[10px] align-center">
        <div className="flex lg:flex-col gap-x-[70px] md:gap-y-[20px] justify-between px-[10px] w-fit mx-auto">
          <div className="w-fit md:hidden">
            <h1 className="text-[129px] lg:text-[100px] mg:text-[80px] pic_help:text-[60px] font-bold whitespace-nowrap">Наши работы</h1>
            <img src="/greyWaveSpiral.svg" className="w-full object-fill mg:hidden" />
            <img src="/greyWaveSpiral.svg" className="hidden mg:block w-full object-fill" />
          </div>
          <h1 className="hidden md:block text-[48px] font-bold whitespace-nowrap sm:text-[38px]">Наши работы</h1>
        </div>
        <img src="/greyWaveSpiralSmall.svg" className="object-scale-down hidden md:block mx-auto w-[15rem]" />
        <Pictures pictures={pictures} isArtShop={isArtShop} />
      </div>
    </Layout>
  )
}
