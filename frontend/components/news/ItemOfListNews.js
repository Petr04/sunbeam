import Image from 'next/image'
import Link from 'next/link'
import { Router } from "next/navigation"

function formatTime(time) {
  String(time)
  return time.slice(8, 10) + "." + time.slice(5,7) + "." + time.slice(0,4)
}
  
function formatReadingTime(lang){
  if (lang === "ru"){
    return " мин"
  } else if (lang === "en"){
    return " min"
  }
}

export default function ItemOfListNews({ id, title, content, image, publishedAt, readingTime, lang }) {

  const path = process.env.NEXT_PUBLIC_API_URL + image.url;
  const publishedTime = formatTime(publishedAt)
  const url = "/news/"+id

  return (
    <Link href={url}>
      <div suppressHydrationWarning={true} className="relative flex flex-col gap-[20px] p-[20px] bg-primary rounded-[35px]">
        <Image
          loading = 'lazy'
          alt="New"
          width={400}
          height={100}
          src={path}
          className="w-full basis-1/4 rounded-[15px]"
        />
        <div className="absolute right-[2rem] top-[14rem] lt:top-[12rem] lg:top-[16rem] mg:top-[12rem] pic_help:top-[18rem] md:top-[16rem] sm:top-[13rem] ssm:relative ssm:top-0 ssm:left-0 flex flex-inline gap-2 text-gray-04 text-[14px]">
          <div className=" bg-white rounded-[2rem] flex flex-inline gap-1 w-fit">
            <img alt="calendar" src="/news/calendar.svg" className="ps-[0.6rem]"/> 
            <p className="p-[0.2rem] pe-[0.6rem]">{publishedTime}</p> 
          </div>
          <div className="bg-white rounded-[2rem] flex flex-inline gap-1 w-fit">
            <img alt="hourglass" src="/news/hourglass.svg" className="ps-[0.6rem]"/> 
            <p className="p-[0.2rem] pe-[0.6rem]">{readingTime} {formatReadingTime(lang)}</p> 
          </div>
        </div>
        <h1 className="text-white text-[32px] font-semibold mt-[-20px] mb-[-13px] ssm:text-[28px]">{title}</h1>
        <p className="text-white text-[18px] font-normal line-clamp-4 ssm:text-[14px]">{content}</p>
        
      </div>
    </Link>
  )
}