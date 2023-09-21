'use client'

import { useState } from 'react'

export default function Menu() {
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => setShowModal(!showModal)

  return (
    <div className="pt-[50px] z-10 lg:bg-yellowBg md:bg-yellowBg">
      <nav className="flex justify-between items-center z-10 px-[68px] md:px-[30px] lg:bg-yellowBg md:bg-yellowBg">

        <a href="#"><img src="/logo_yellow.svg" alt="logo" className="w-[276px] z-0"></img></a>

        <ul className="flex gap-8 wide:gap-12  lg:hidden md:hidden z-0">
          <li><a href="" className="font-light text-xl wide:text-2xl">расписание</a></li>
          <li><a href="" className="font-light text-xl wide:text-2xl">новости</a></li>
          <li><a href="" className="font-light text-xl wide:text-2xl">наши работы</a></li>
          <li><a href="" className="font-light text-xl wide:text-2xl">арт-лавка</a></li>
          <li><a href="" className="font-light text-xl wide:text-2xl">контакты</a></li>
          <li><a href="" className="font-light text-xl wide:text-2xl">ru</a><img src="/ru-en_yellow.svg" alt="ru-en" className="inline mx-1" ></img></li>
        </ul>

        <button
          onClick={toggleModal}
          className="relative h-[20px] w-[30px] hidden lg:block md:block lg:right-0 z-10"
        >
          <img src="/menu-01.svg"/>
        </button>
      </nav>

      {showModal === true &&
        <div className="absolute md:top-[120px] md:left-8 lg:left-10 md:w-full lg:w-full lg:top-[140px] bg-yellow_bg z-10 lg:bg-yellowBg md:bg-yellowBg"> 
          <ul className="grid grid-cols-2 gap-2">
            <li><a href="/schedule" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">расписание</a></li>
            <li><a href="" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">новости</a></li>
            <li><a href="" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">наши работы</a></li>
            <li><a href="" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">арт-лавка</a></li>
            <li><a href="" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">контакты</a></li>
            <li>
              <a href="" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">ru</a>
              <img src="/ru-en_yellow.svg" alt="ru-en" className="inline mx-1" ></img>
            </li>
          </ul>
        </div>       
      }
    </div>
  )
}