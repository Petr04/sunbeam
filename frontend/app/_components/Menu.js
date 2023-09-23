'use client'

import { useState } from 'react'

export default function Menu() {
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => setShowModal(!showModal)

  return (
    <div className={showModal ? 'overflow:hidden relative wide:w-[80%] xl:w-[100%] lg:w-[80%] md:w-[100%] mx-auto pt-[50px] px-[68px] lt:px-[30px] md:px-[30px] bg-yellowBg z-20' : 'wide:w-[80%] xl:w-[100%] lg:w-[80%] mx-auto pt-[50px] px-[68px] lt:px-[30px] md:px-[30px]'} >
        <nav className="flex justify-between items-center z-10 h-fit">
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
          overflow-y:hidden fixed
          bg-yellowBg z-20 ml-[-9rem] w-[1500px] h-fit pt-[2rem] pb-[1rem] pl-[5rem]
          md:top-[5.2rem]
          lg:top-[5.7rem]
          "> 
          <ul className="relative mr-[50rem] ml-[1rem] md:ml-[3rem] md:mr-[60rem] grid grid-cols-2 gap-2">
            <li><a href="/schedule" className="font-light md:text-xl sm:text-lg md:mx-5 lg:text-2xl lg:mx-8">расписание</a></li>
            <li><a href="/news" className="font-light md:text-xl sm:text-lg md:mx-5 lg:text-2xl lg:mx-8">новости</a></li>
            <li><a href="/our-works" className="font-light md:text-xl sm:text-base md:mx-5 lg:text-2xl lg:mx-8">наши работы</a></li>
            <li><a href="/art-shop" className="font-light md:text-xl sm:text-base md:mx-5 lg:text-2xl lg:mx-8">арт-лавка</a></li>
            <li><a href="/contacts" className="font-light md:text-xl sm:text-base md:mx-5 lg:text-2xl lg:mx-8">контакты</a></li>
            <li>
              <a href="" className="font-light md:text-xl md:mx-5 lg:text-2xl sm:text-base sm:mr-1 lg:mx-8">ru</a>
              <img src="/ru-en_yellow.svg" alt="ru-en" className="inline mx-1" ></img>
            </li>
          </ul>
        </div>       
      }

      {showModal === true &&
        <div className='overflow-y:hidden fixed ml-[-9rem] w-[1150px] h-full z-10 bg-opacityBlack'>
        </div>
      }
    </div>

    
  )
}