import Layout from '@/components/Layout'
import ky from '@/ky'
import ListNews from '@/components/news/ListNews'
import { getDictionary } from '@/lib/dictionary'

export const revalidate = 2 // change in prod

export default async function News( {params: {lang}} ) {

  const news = await ky.get(`api/news?populate[0]=image&locale=${lang}`).json()

  const dict = await getDictionary(lang)

  return (
    <Layout lang={lang}>
      <div className="flex flex-col gap-[50px] mx-auto max-w-[1300px] px-[10px] align-center">
        <div className="flex lg:flex-col gap-x-[70px] lt:gap-x-[20px] md:gap-y-[20px] justify-between px-[10px] w-fit mx-auto">
          <div className="w-full flex flex-row lt:flex-col">
            <h1 className="text-[129px] mg:text-[100px] mr-[6rem] font-bold whitespace-nowrap md:text-[48px] lt:mr-[0rem] lt:mb-[2rem]">{dict.page.news.news}</h1>
            <img src="/news/longSpiral.svg" className="w-full object-fill object-scale-right md:hidden" />
            <img src="/news/longSpiralSmall.svg" className="zoom:hidden md:block w-full object-fill object-scale-right" />
          </div>
        </div>
        <ListNews news={news} lang={lang}/>
      </div>
    </Layout>
  )
}
