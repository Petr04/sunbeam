'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function BackButton() {

  const router = useRouter()

  return (
    <button
      type="button"
      className="flex items-center gap-[10px] p-[10px] text-gray-01 dark:text-gray-02 text-[20px] font-medium outline-none w-fit"
      onClick={() => router.back()}
    >
      <Image
        src="/arrow-left.svg"
        alt="arrow_left"
        width={24} height={24}
      />
      Назад
    </button>
  )
}
