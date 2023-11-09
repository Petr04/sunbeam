import ky from '@/ky'
import Layout from '@/components/Layout'
import Image from 'next/image'
import BackButton from '@/components/BackButton'
import Link from 'next/link'

function formatDate(time) {
  String(time)
  return time.slice(8, 10) + "." + time.slice(5,7) + "." + time.slice(0,4)
}

function formatTime(time) {
  String(time)
  return time.slice(11, 16)
}

export default async function Page({params}) {

  let url = 'api/news/'+params.newsId+`?populate[0]=image&locale=${params.lang}`

  const news = await ky.get(url).json()
  const path = process.env.NEXT_PUBLIC_API_URL + news.data.image.url;

    return(
        <Layout lang={params.lang}>
          <Image
            alt="explosion"
            src="/news/explosion.svg"
            width={230}
            height={230}
            className="absolute right-[4rem] top-[28rem] z-0 lg:w-[10rem] pic_help:hidden"
            />
          <Image
            alt="waveSpiral"
            src="/news/waveSpiral.svg"
            width={350}
            height={350}
            className="absolute right-[14rem] top-[10rem] z-0 lg:w-[10rem] pic_help:right-[2rem] pic_help:top-[7rem] sm:hidden"
            />
          <Image
            alt="circleSpiral"
            src="/news/circleSpiral.svg"
            width={350}
            height={350}
            className="absolute left-[2rem] top-[20rem] z-0 lg:w-[10rem] pic_help:hidden"
            />

          <div className="flex flex-col gap-[25px] mx-auto max-w-[1300px] wide:px-[10rem] xl:px-[18rem] align-center lg:px-[10rem] pic_help:px-[2rem] sm:gap-[0.8rem]">
            <Link href={`../news`}><BackButton/></Link>
            <p className="text-[48px] font-bold whitespace-nowrap sm:text-[34px]">{news.data.title}</p>
            <div className="relative flex flex-inline gap-4 text-white sm:text-[12px] sm:gap-2 sm:flex-col">
              <div className=" bg-primary rounded-[2rem] flex flex-inline gap-1 w-fit">
                <img alt="calendar" src="/news/whiteCalendar.svg" className="ps-[0.6rem]"/> 
                <p className="p-[0.2rem] pe-[0.6rem]">{formatDate(news.data.publishedAt)}</p> 
              </div>
              <div className="bg-primary rounded-[2rem] flex flex-inline gap-1 w-fit">
                <img alt="time" src="/news/whiteClock.svg" className="ps-[0.6rem]"/> 
                <p className="p-[0.2rem] pe-[0.6rem]">{formatTime(news.data.publishedAt)}</p> 
              </div>
              <div className="bg-primary rounded-[2rem] flex flex-inline gap-1 w-fit">
                <img alt="hourglass" src="/news/whiteHourglass.svg" className="ps-[0.6rem]"/> 
                <p className="p-[0.2rem] pe-[0.6rem] ">{news.data.readingTime} мин</p> 
              </div>
            </div>
            <Image
              alt="newsImage"
              src={path}
              width={300}
              height={300}
              className="relative w-full left-0 top-0 z-0"
              />
              <p className="text-[24px] font-medium leading-[2rem] sm:text-[18px] sm:leading-[1.5rem]">{news.data.content}</p>
          </div>
          

        </Layout>
    )
}
