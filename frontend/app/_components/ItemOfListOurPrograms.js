export default function ItemOfListOurPrograms ({title, image, childrenAge, numOfChildren}) {
    return (
        <div className="
            bg-yellowText rounded-[2rem] p-5 w-fit my-2 h-fit
            lt:w-[90%]
            lg:w-fit
            mg:w-full mg:h-fit
            ssm:p-4
            ">

            <img 
                src={image} alt="ourProgramsPhoto" 
                className="
                    rounded-[1rem]
                    mg:w-[50rem] mg:object-cover mg:h-[17rem]
                    "/>

            <ul className="flex gap-2 my-[0.7rem] list-disc list-inside	">

                {childrenAge != "" &&    
                    <li className="
                        text-white bg-blackBg font-light text-[15px] rounded-[3rem] w-fit py-1 px-3
                        lg:text-[14px]
                        ssm:text-[11px]
                        ">{childrenAge}</li>
                }
                {numOfChildren != "" &&
                    <li className="
                    text-white bg-blackBg font-light text-[15px] rounded-[3rem] w-fit py-1 px-3
                    lg:text-[14px]
                    ssm:text-[11px]
                    ">{numOfChildren}</li>
                }

            </ul>

            <div className="
                text-white font-medium text-3xl w-[20rem] my-4
                lg:text-2xl
                ssm:text-[20px] ssm:w-[15rem]
                ssm:gap-1
                ssm:text-[11px]
                    ">Записаться</button>
                <button className="
                    font-light bg-white text-black text-[15px] rounded-[1rem] w-fit py-2 px-5
                    lg:text-[14px] 
                    ssm:text-[11px]
                    ">Узнать расписание</button>
            </div>
        </div> 
    )
    
}