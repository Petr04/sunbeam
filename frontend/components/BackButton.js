import Link from 'next/link'
import Image from 'next/image'

export default function BackButton({ onClick }) {
  return (
    <button
      type="button"
      className="flex items-center gap-[10px] p-[10px] text-gray-01 dark:text-gray-02 text-[20px] font-medium outline-none w-fit"
      onClick={onClick}
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
