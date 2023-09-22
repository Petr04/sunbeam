'use client'

import { useState } from 'react'

export default function Menu() {
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => setShowModal(!showModal)

  return (
    <div className="lg:mx-auto lg:w-[80%] pt-[50px] px-[68px] lt:px-[30px] md:px-[30px]">
      <nav className="flex justify-between items-center z-0">
        <a href="/">
          <img 
            src="/logo_yellow.svg" alt="logo" 
            className="wide:w-[276px] xl:w-[276px] md:w-[14rem]"/>
        </a>

        <ul className="flex gap-8 wide:gap-12  lg:hidden md:hidden">
          <li><a href="/schedule" className="font-light lt:text-lg xl:text-xl wide:text-2xl">расписание</a></li>
          <li><a href="/news" className="font-light lt:text-lg xl:text-xl wide:text-2xl">новости</a></li>
          <li><a href="/our-works" className="font-light lt:text-lg xl:text-xl wide:text-2xl">наши работы</a></li>
          <li><a href="/art-shop" className="font-light lt:text-lg xl:text-xl wide:text-2xl">арт-лавка</a></li>
          <li><a href="/contacts" className="font-light lt:text-lg xl:text-xl wide:text-2xl">контакты</a></li>
          <li>
            <a href="" className="font-light lt:text-lg xl:text-xl wide:text-2xl">ru</a>
            <img src="/ru-en_yellow.svg" alt="ru-en" className="inline mx-1"/>
          </li>
        </ul>

        <button
          onClick={toggleModal}
          className="relative h-[20px] w-[30px] hidden lg:block md:block lg:right-0 z-10"
        >
          <img src="/menu-01.svg"/>
        </button>
      </nav>

      {showModal === true &&
        <div className="
          absolute bg-yellow_bg z-0
          md:top-[120px] md:left-5 
          lg:top-[140px] lg:left-10
          "> 
          <ul className="grid grid-cols-2 gap-2">
            <li><a href="/schedule" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">расписание</a></li>
            <li><a href="/news" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">новости</a></li>
            <li><a href="/our-works" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">наши работы</a></li>
            <li><a href="/art-shop" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">арт-лавка</a></li>
            <li><a href="/contacts" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">контакты</a></li>
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