'use client'

import { useState } from 'react'
import Image from 'next/image'
import LanguagePicker from '@/components/LanguagePicker'

export default function Menu() {
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => setShowModal(!showModal)

  return (
    <div className="py-[50px] px-[68px] md:px-[30px]">
      <nav className="flex justify-between items-center z-30">
        <a href="/">
          <Image
            className="dark:hidden ssm:w-[13rem]"
            src="/logo_yellow.svg"
            width={276}
            height={41.25}
            alt="Логотип Луч солнца"
          />
          <Image
            src="/logo_grey.svg"
            width={276}
            height={41.25}
            alt="Логотип Луч солнца"
            className="hidden dark:block ssm:w-[13rem]"
          />
        </a>

        <ul className="flex lt:gap-8 xl:gap-10 wide:gap-12 lg:hidden md:hidden dark:text-gray-02">
          <li>
            <a href="/schedule" className="lt:text-xl wide:text-2xl">расписание</a>
          </li>
          <li>
            <a href="/news" className="lt:text-xl wide:text-2xl">новости</a>
          </li>
          <li>
            <a href="/our-works" className="lt:text-xl wide:text-2xl">наши работы</a>
          </li>
          <li>
            <a href="/art-shop" className="lt:text-xl wide:text-2xl">арт-лавка</a>
          </li>
          <li>
            <a href="/contacts" className="lt:text-xl wide:text-2xl">контакты</a>
          </li>
          <LanguagePicker />
        </ul>

        <button
          onClick={toggleModal}
          className="relative h-[20px] w-[30px] hidden lg:block md:block lg:right-0 z-10"
        >
          <Image
            className="dark:hidden ssm:w-[13rem]"
            src="/menu-01.svg"
            width={24}
            height={24}
            alt="Меню"
          />
          <Image
            className="hidden dark:block ssm:w-[13rem]"
            src="/menu-01-dark.svg"
            width={24}
            height={24}
            alt="Меню"
          />
        </button>
      </nav>

      {showModal === true &&
        <div className="fixed lg:left-0 w-full bg-background z-20 rounded-b-[3rem]"> 
          <ul className="grid grid-cols-2 gap-2 px-[10rem] py-[2rem]">
            <li><a href="/schedule" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">расписание</a></li>
            <li><a href="/news" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">новости</a></li>
            <li><a href="/our-works" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">наши работы</a></li>
            <li><a href="/art-shop" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">арт-лавка</a></li>
            <li><a href="/contacts" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">контакты</a></li>
            <LanguagePicker className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8" />
          </ul>
        </div>       
      }

      {showModal === true &&
        <div className='overflow-y:hidden fixed ml-[-9rem] mt-[5rem] w-[1200px] h-full z-10 bg-dim'>
        </div>
      }
    </div>
  )
}
