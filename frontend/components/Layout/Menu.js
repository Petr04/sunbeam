'use client'

import { useState } from 'react'
import Image from 'next/image'
import LanguagePicker from '@/components/LanguagePicker'

export default function Menu() {
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => setShowModal(!showModal)

  return (
    <div className="py-[50px] px-[68px] md:px-[30px]">
      <nav className="flex justify-between items-center z-0">
        <a href="/">
          <Image
            className="dark:hidden"
            src="/logo_yellow.svg"
            width={276}
            height={41.25}
            alt="Логотип Луч солнца"
          />
          <Image
            className="hidden dark:block"
            src="/logo_grey.svg"
            width={276}
            height={41.25}
            alt="Логотип Луч солнца"
          />
        </a>

        <ul className="flex gap-8 wide:gap-12 lg:hidden md:hidden dark:text-gray-02">
          <li>
            <a href="" className="text-xl wide:text-2xl">расписание</a>
          </li>
          <li>
            <a href="" className="text-xl wide:text-2xl">новости</a>
          </li>
          <li>
            <a href="" className="text-xl wide:text-2xl">наши работы</a>
          </li>
          <li>
            <a href="/art-shop" className="text-xl wide:text-2xl">арт-лавка</a>
          </li>
          <li>
            <a href="" className="text-xl wide:text-2xl">контакты</a>
          </li>
          <LanguagePicker />
        </ul>

        <button
          onClick={toggleModal}
          className="relative h-[20px] w-[30px] hidden lg:block md:block lg:right-0 z-10"
        >
          <Image
            className="dark:hidden"
            src="/menu-01.svg"
            width={24}
            height={24}
            alt="Меню"
          />
          <Image
            className="hidden dark:block"
            src="/menu-01-dark.svg"
            width={24}
            height={24}
            alt="Меню"
          />
        </button>
      </nav>

      {showModal === true &&
        <div className="absolute md:top-[120px] md:left-5 lg:top-[140px] lg:left-10 bg-yellow_bg z-0"> 
          <ul className="grid grid-cols-2 gap-2">
            <li><a href="/schedule" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">расписание</a></li>
            <li><a href="" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">новости</a></li>
            <li><a href="" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">наши работы</a></li>
            <li><a href="" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">арт-лавка</a></li>
            <li><a href="" className="font-light md:text-xl md:mx-5 lg:text-2xl lg:mx-8">контакты</a></li>
            <LanguagePicker />
          </ul>
        </div>       
      }

      {showModal === true &&
        <div className='overflow-y:hidden fixed ml-[-9rem] w-[1150px] h-full z-10 bg-dim'>
        </div>
      }
    </div>
  )
}
