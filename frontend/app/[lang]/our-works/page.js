import Link from 'next/link'
import Layout from '@/components/Layout'
import Pictures from '@/components/picture/Pictures'
import ky from '@/kyUniversal'
import { getDictionary } from '@/lib/dictionary'

export const revalidate = 2 // change in prod

export default async function OurWorks({ children, params: {lang} }) {
  const isArtShop = false

  const pictures = await ky.get(`api/pictures?populate[0]=image&populate[1]=author&locale=${lang}`).json()

  const dict = await getDictionary(lang)

  return (
    <Layout dark lang={lang}>
      {children}
      <div className="flex flex-col gap-[50px] mx-auto max-w-[1300px] px-[10px] align-center">
        <div className="flex lg:flex-col gap-x-[70px] md:gap-y-[20px] justify-between px-[10px] w-fit mx-auto">
          <div className="w-fit md:hidden">
            <h1 className="text-[129px] lg:text-[100px] mg:text-[80px] pic_help:text-[60px] font-bold whitespace-nowrap">{dict.page.our_works.heading}</h1>
            <img alt="spiral" src="/greyWaveSpiral.svg" className="w-full object-fill mg:hidden" />
            <img alt="spiral" src="/greyWaveSpiral.svg" className="hidden mg:block w-full object-fill" />
          </div>
          <h1 className="hidden md:block text-[48px] font-bold whitespace-nowrap sm:text-[38px]">{dict.page.our_works.heading}</h1>
        </div>
        <img alt="spiral" src="/greyWaveSpiralSmall.svg" className="object-scale-down hidden md:block mx-auto w-[15rem]" />
        <Pictures pictures={pictures} isArtShop={isArtShop} />
      </div>
    </Layout>
  )
}