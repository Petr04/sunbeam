import { twMerge } from 'tailwind-merge'

export default function Button({ children, className, compact }) {
  return <button
    className={
      twMerge(
        `flex gap-[20px] ${compact ? 'px-[24px] py-[12px]' : 'px-[50px] py-[25px]'} rounded-[20px] text-[20px] text-gray-04 bg-primary dark:text-gray-02 dark:bg-gray-04 dark:font-medium justify-center items-center shadow-md`,
        className,
      )
    }
  >
    {children}
  </button>
}
