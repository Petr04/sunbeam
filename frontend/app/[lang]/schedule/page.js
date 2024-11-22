import Layout from '@/components/Layout'
import ky from '@/kyUniversal'
import { getDictionary } from '@/lib/dictionary'

export const revalidate = 2 // change in prod

export default async function Schedule( {children, params: {lang}} ) {

  const schedule = await ky.get(`api/schedules?locale=${lang}`).json()

  const dict = await getDictionary(lang)

  return (
    <Layout lang={lang}>
      {children}
      <div className="flex flex-col gap-[50px] mx-auto max-w-[1300px] px-[10px] align-center">
        <div className="flex flex-row lg:flex-col gap-x-[70px] md:gap-y-[20px] justify-between lg:items-center px-[10px] w-fit mx-auto">
          <h1 className="text-[129px] lt:text-[112px] lg:text-[100px] mg:text-[80px] pic_help:text-[60px] md:text-[48px] sm:text-[38px] font-bold whitespace-nowrap">{dict.page.schedule.heading}</h1>
          <img alt="spiral" src="/yellowWaveSpiral.svg" className="w-fit object-fit sm:w-[15rem]" />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-[25rem] overflow-x-scroll ml-[9rem]">
        <div className="text-primary text-[24px] text-center">Понедельник</div>
        <div className="text-primary text-[24px] text-center">Вторник</div>
        <div className="text-primary text-[24px] text-center">Среда</div>
        <div className="text-primary text-[24px] text-center">Четверг</div>
        <div className="text-primary text-[24px] text-center">Пятница</div>
        <div className="text-primary text-[24px] text-center">Суббота</div>
        <div className="text-primary text-[24px] text-center">Воскресенье</div>
      </div>
    </Layout>
  )
}
