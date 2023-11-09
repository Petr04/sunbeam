'use client'

import Image from 'next/image'

export default function BackButton({ onClick, chip, className }) {
  return (
    <button
      className={`flex items-center gap-[10px] ${chip ? 'px-[20px] py-[15px] bg-gray-03' : 'p-[10px]'} text-gray-01 dark:text-gray-02 text-[20px] font-medium rounded-full outline-none w-fit ${className}`}
      onClick={onClick}
    >
      <Image
        className="hidden dark:block"
        src="/arrow-left-gray-02.svg"
        alt="arrow_left"
        width={24} height={24}
      />
      <Image
        className="dark:hidden"
        src="/arrow-left-gray-01.svg"
        alt="arrow_left"
        width={24} height={24}
      />
      Назад
    </button>
  )
}
