import Image from "next/image";

function numeralOfAge(age) {
    const intAge = parseInt(age[age.length-1])
    if (intAge % 10 == 1) return age+' год'
    if (age>9, age<21) return age+' лет'
    if ([2, 3, 4].includes(intAge % 10)) return age+' года'
    return age+' лет'
}

function numeralOfChidren(num) {
    const intNum = parseInt(num)
    if ([0, 1, 2, 3, 4].includes(intNum % 10)) return num+' человека в группе'
    if (intNum>9 && intNum<21) return num+' человек в группе'
    return num+' человек в группе'
}

export default function ItemOfListOurPrograms ({title, image, childrenAge, childrenNumInGroup}) {

    const path = process.env.NEXT_PUBLIC_API_URL + image.url;

    return (
        <div className="
            bg-primary rounded-[2rem] p-5 w-[100%] my-2 h-fit
            lt:w-[90%]
            lg:w-fit
            mg:w-full mg:h-fit
            ssm:p-4
            ">

            <Image
                src={path} 
                alt="ourProgramsPhoto" 
                width={350}
                height={300}
                className="rounded-[15px]"
            />

            <ul className="flex gap-2 my-[0.7rem] list-disc list-inside	">

                {childrenAge != "" &&    
                    <li className="
                        text-white bg-gray-04 font-light text-[15px] rounded-[3rem] w-fit py-1 px-2
                        lg:text-[14px]
                        ssm:text-[10px]
                        ">{numeralOfAge(childrenAge)}</li>
                }
                {childrenNumInGroup != "" &&
                    <li className="
                    text-white bg-gray-04 font-light text-[15px] rounded-[3rem] w-fit py-1 px-2
                    lg:text-[14px]
                    ssm:text-[10px]
                    ">{numeralOfChidren(childrenNumInGroup)}</li>
                }

            </ul>
            <div className="
                text-white font-medium text-3xl w-[20rem] my-4
                lg:text-2xl
                ssm:w-[15rem] ssm:gap-1 ssm:text-[20px]">{title}</div>

            <div 
                className="
                flex gap-2
                ssm:gap-1
                ">
                <button className="
                font-light bg-gray-04 text-white text-[15px] rounded-[1rem] w-fit py-2 px-5
                lg:text-[14px] 
                ssm:text-[10px] ssm:px-3
                shadow-md
                    ">Записаться</button>
                <button className="
                    font-light bg-white text-gray-04 text-[15px] rounded-[1rem] w-fit py-2 px-5
                    lg:text-[14px] 
                    ssm:text-[10px] ssm:px-3
                    shadow-md
                    ">Узнать расписание</button>
            </div>
        </div> 
    )    
}
