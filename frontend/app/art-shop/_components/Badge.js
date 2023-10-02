import Image from 'next/image'

export default function Badge({ text }) {
  return (
    <div className="inline-flex w-fit gap-[10px] px-[12px] py-[6px] bg-gray-04 rounded-full text-[16px]">
      <Image src="/badge-bullet-grey-02.svg" width={6} height={6} alt="-" />
      {text}
    </div>
  )
}