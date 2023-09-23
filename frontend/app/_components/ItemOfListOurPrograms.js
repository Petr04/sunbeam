export default function ItemOfListOurPrograms ({title, age, childrenNum, imgSrc}) {
    return (
        <div className="bg-yellowText rounded-[2rem] p-5 w-fit my-2 h-fit">
            <img src={imgSrc} alt="ourProgramsPhoto" className="rounded-[1rem]"></img>
            <ul className="flex gap-2 my-[0.7rem] list-disc list-inside	">
                {age != "" &&    
                    <li className="text-white bg-blackBg font-light text-[15px] rounded-[3rem] w-fit py-1 px-3">{age}</li>
                }
                {childrenNum != "" &&
                <li className="text-white bg-blackBg font-light text-[15px] rounded-[3rem] w-fit py-1 px-3">{childrenNum}</li>
                }
            </ul>
            <div className="text-white font-medium text-3xl w-[20rem] my-4">{title}</div>
            <div className="flex gap-6 my-1">
                <button className="font-light bg-blackBg text-white text-[15px] rounded-[1rem] w-fit py-2 px-5">Записаться</button>
                <button className="font-light bg-white text-black text-[15px] rounded-[1rem] w-fit py-2 px-5">Узнать расписание</button>
            </div>
        </div> 
    )
    
}