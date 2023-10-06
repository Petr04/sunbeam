import Image from 'next/image'

function formatTime(time) {
  String(time)
  return time.slice(8, 10) + "." + time.slice(5,7) + "." + time.slice(0,4)
}

export default function ItemOfListNews({ title, content, images, publishedAt, readingTime }) {

  const path = process.env.NEXT_PUBLIC_API_URL + images.url;
  const publishedTime = formatTime(publishedAt)

  return (
    <div suppressHydrationWarning={true} className="flex flex-col gap-[20px] p-[20px] bg-primary rounded-[35px]">
      <Image
        alt="New"
        src={path}
        width={343}
        height={250}
        className="w-full h-auto rounded-[15px]"
      />
      <div className="flex flex-inline gap-2 text-gray-04 text-[14px]">
        <div className=" bg-white rounded-[2rem] flex flex-inline gap-1 w-fit">
          <img alt="calendar" src="/news/calendar.svg" className="ps-[0.6rem]"/> 
          <p className="p-[0.2rem] pe-[0.6rem]">{publishedTime}</p> 
        </div>
        <div className="bg-white rounded-[2rem] flex flex-inline gap-1 w-fit">
          <img alt="hourglass" src="./news/hourglass.svg" className="ps-[0.6rem]"/> 
          <p className="p-[0.2rem] pe-[0.6rem]">{readingTime} мин</p> 
        </div>
      </div>
      <h1 className="text-white text-[32px] font-semibold mt-[-20px] mb-[-13px]">{title}</h1>
      <p className="text-white text-[18px] font-normal line-clamp-4">{content}</p>
      
    </div>
  )
}