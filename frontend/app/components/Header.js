'use client'
import {useState} from 'react'

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (!showModal) {
      setShowModal(true)
    } else {
      setShowModal(false)
    }
    
    console.log(showModal)
  };

  return (
    <div class="pt-[50px] px-[68px]  md:px-[30px]">
      <nav class="flex justify-between items-center">
        <a href="#"><img src="/logo_yellow.svg" alt="logo" class="w-[276px]"></img></a>

        <ul class="flex gap-8 wide:gap-12  lg:hidden md:hidden">
          <li><a href="" class="font-light text-xl wide:text-2xl">расписание</a></li>
          <li><a href="" class="font-light text-xl wide:text-2xl">новости</a></li>
          <li><a href="" class="font-light text-xl wide:text-2xl">наши работы</a></li>
          <li><a href="" class="font-light text-xl wide:text-2xl">арт-лавка</a></li>
          <li><a href="" class="font-light text-xl wide:text-2xl">контакты</a></li>
          <li><a href="" class="font-light text-xl wide:text-2xl">ru</a><img src="/ru-en_yellow.svg" alt="ru-en" class="inline mx-1" ></img></li>
        </ul>

        <button onClick={handleClick} class="relative h-[20px] w-[30px] hidden lg:block md:block lg:right-0">
          <span class="absolute left-0 top-0 flex w-[30px] h-[2px] bg-yellow_text"> </span>
          <span class="absolute left-0 top-[50%] flex w-[30px] h-[2px] bg-yellow_text "> </span>
          <span class="absolute left-0 bottom-0 flex w-[30px] h-[2px] bg-yellow_text"> </span> 
        </button>               

      </nav>

      {showModal==true &&
        <div class="absolute md:top-[120px] md:left-5 lg:top-[140px] lg:left-10 bg-yellow_bg"> 
          <ul class="grid grid-cols-2 gap-2">
            <li><a href="/schedule" class="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">расписание</a></li>
            <li><a href="" class="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">новости</a></li>
            <li><a href="" class="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">наши работы</a></li>
            <li><a href="" class="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">арт-лавка</a></li>
            <li><a href="" class="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">контакты</a></li>
            <li><a href="" class="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">ru</a><img src="/ru-en_yellow.svg" alt="ru-en" class="inline mx-1" ></img></li>
          </ul>
        </div>       
      }
    </div>
  )
}