import Image from 'next/image'

export default function LanguagePicker({ className }) {
  return (
    <div className={`flex flex-row gap-[5px] ${className}`}>
      <div href="" className="text-xl wide:text-2xl">ru</div>
      <Image
        className="dark:hidden"
        src="/chevron-down.svg"
        width={24}
        height={24}
        alt="Языки"
      />
      <Image
        className="hidden dark:block"
        src="/chevron-down-dark.svg"
        width={24}
        height={24}
        alt="Языки"
      />
    </div>
  )
}
