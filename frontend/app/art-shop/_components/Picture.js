import Image from 'next/image'
import Badge from './Badge'

function numeralOfAge(age) {
  if (age % 10 == 1) return 'год'
  if ([2, 3, 4].includes(age % 10)) return 'года'
  return 'лет'
}

export default function Picture({ title, description, image, author, technology }) {
  const path = process.env.NEXT_PUBLIC_API_URL + image.url;

  return (
    <div suppressHydrationWarning={true} className="flex flex-col gap-[20px] p-[20px] bg-gray-03 rounded-[35px]">
      <Image
        alt="Работа"
        src={path}
        width={343}
        height={343}
        className="w-full h-auto rounded-[15px]"
      />
      <Badge text={technology} />
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-[36px] font-semibold mt-[-20px] mb-[-13px]">{title}</h2>
        <p className="text-[21px]">{author.full_name}, {author.age} {numeralOfAge(author.age)}</p>
      </div>
      <button className="rounded-[17px] py-[13px] bg-gray-04 font-semibold text-[17px] shadow-md">
        Купить
      </button>
    </div>
  )
}
