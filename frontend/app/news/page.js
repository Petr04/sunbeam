import ky from 'ky'
import useMemo from 'react'

export default async function News() {
  const news = await ky.get('api/news?populate[0]=image&populate[1]=author').json()

  return (
    <main className="wide:w-[80%] xl:w-[100%] lg:w-[80%] md:w-[100%] mx-auto grid grid-cols-1 h-fit items-center z-0">

      <div className="flex gap-[8rem] mx-auto mt-[3rem]">
        <div className="
          text-[120px] font-bold
          ">Новости</div>
        <img 
          src="/news/longSpiral.svg" alt="longSpiral"
          className="
          "
          />
        <ListNews news={news} />

      </div>
      
    </main>
  )
}
