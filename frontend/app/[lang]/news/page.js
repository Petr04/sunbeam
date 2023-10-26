import Layout from '@/components/Layout'
import ky from '@/ky'
import ListNews from '@/components/news/ListNews'

export const revalidate = 2 // change in prod

export default async function News() {
  const news = await ky.get('api/news?populate[0]=image').json()

  return (
    <Layout>
      <div className="flex flex-col gap-[50px] mx-auto max-w-[1300px] px-[10px] align-center">
        <div className="flex lg:flex-col gap-x-[70px] lt:gap-x-[20px] md:gap-y-[20px] justify-between px-[10px] w-fit mx-auto">
          <div className="w-full flex flex-row lt:flex-col">
            <h1 className="text-[129px] mg:text-[100px] mr-[6rem] font-bold whitespace-nowrap md:text-[48px] lt:mr-[0rem] lt:mb-[2rem]">Новости</h1>
            <img src="/news/longSpiral.svg" className="w-full object-fill object-scale-right md:hidden" />
            <img src="/news/longSpiralSmall.svg" className="zoom:hidden md:block w-full object-fill object-scale-right" />
          </div>
        </div>
        <ListNews news={news} />
      </div>
    </Layout>
  )
}
