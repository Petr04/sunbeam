export default function ItemOfListOurPrograms ({title, age, childrenNum, imgSrc}) {
    return (
        <div className="
            bg-yellowText rounded-[2rem] p-5 w-fit my-2 h-fit
            lt:w-[90%]
            lg:w-fit
            mg:w-full mg:h-fit
            ">

            <img 
                src={imgSrc} alt="ourProgramsPhoto" 
                className="
                    rounded-[1rem]
                    mg:w-[50rem] mg:object-cover mg:h-[17rem]
                    "/>

            <ul className="flex gap-2 my-[0.7rem] list-disc list-inside	">
                
                {age != "" &&    
                    <li className="
                        text-white bg-blackBg font-light text-[15px] rounded-[3rem] w-fit py-1 px-3
                        lg:text-[14px]
                        ">{age}</li>
                }
                {childrenNum != "" &&
                    <li className="
                    text-white bg-blackBg font-light text-[15px] rounded-[3rem] w-fit py-1 px-3
                    lg:text-[14px]
                    ">{childrenNum}</li>
                }

            </ul>

            <div className="
                text-white font-medium text-3xl w-[20rem] my-4
                lg:text-2xl
                ">{title}</div>
            <div className="
                flex gap-6 my-1 
                lg:gap-2
                ">
                <button className="
                    font-light bg-blackBg text-white text-[15px] rounded-[1rem] w-fit py-2 px-5
                    lg:text-[14px] 
                    ">Записаться</button>
                <button className="
                    font-light bg-white text-black text-[15px] rounded-[1rem] w-fit py-2 px-5
                    lg:text-[14px] 
                    ">Узнать расписание</button>
            </div>
        </div> 
    )
    
}