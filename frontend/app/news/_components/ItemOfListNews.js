// export default function ItemOfListOurPrograms ({title, image, childrenAge, numOfChildren}) {
//     return (
//         <div className="
//             bg-yellowText rounded-[2rem] p-5 w-fit my-2 h-fit
//             lt:w-[90%]
//             lg:w-fit
//             mg:w-full mg:h-fit
//             ssm:p-4
//             ">

//             <img 
//                 src={image} alt="ourProgramsPhoto" 
//                 className="
//                     rounded-[1rem]
//                     mg:w-[50rem] mg:object-cover mg:h-[17rem]
//                     "/>

//             <ul className="flex gap-2 my-[0.7rem] list-disc list-inside	">

//                 {childrenAge != "" &&    
//                     <li className="
//                         text-white bg-blackBg font-light text-[15px] rounded-[3rem] w-fit py-1 px-3
//                         lg:text-[14px]
//                         ssm:text-[10px]
//                         ">{childrenAge}</li>
//                 }
//                 {numOfChildren != "" &&
//                     <li className="
//                     text-white bg-blackBg font-light text-[15px] rounded-[3rem] w-fit py-1 px-3
//                     lg:text-[14px]
//                     ssm:text-[10px]
//                     ">{numOfChildren}</li>
//                 }

//             </ul>

//             <div className="
//                 text-white font-medium text-3xl w-[20rem] my-4
//                 lg:text-2xl
//                 ssm:w-[15rem] ssm:gap-1 ssm:text-[20px]">{title}</div>

//             <div 
//                 className="
//                 flex gap-2
//                 ssm:gap-1
//                 ">
//                 <button className="
//                 font-light bg-blackBg text-white text-[15px] rounded-[1rem] w-fit py-2 px-5
//                 lg:text-[14px] 
//                 ssm:text-[10px] ssm:px-3
//                     ">Записаться</button>
//                 <button className="
//                     font-light bg-white text-black text-[15px] rounded-[1rem] w-fit py-2 px-5
//                     lg:text-[14px] 
//                     ssm:text-[10px] ssm:px-3
//                     ">Узнать расписание</button>
//             </div>
//         </div> 
//     )
    
// }

import Image from 'next/image'

function numeralOfAge(age) {
  if (age % 10 == 1) return 'год'
  if ([2, 3, 4].includes(age % 10)) return 'года'
  return 'лет'
}

export default function News({ title, description, image, author, technology }) {
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
      <div className="inline-flex w-fit gap-[10px] px-[12px] py-[6px] bg-gray-04 rounded-full text-[16px]">
        <Image src="/badge-bullet-grey-02.svg" width={6} height={6} alt="-" />
        {text}
        </div>
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