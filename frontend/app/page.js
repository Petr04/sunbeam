import ItemOfListOurPrograms from "./_components/ItemOfListOurPrograms"

export default function Home() {

  return (
    <main className="lg:wi-[80%] lg:p-[5rem] z-0">
      <div className="realtive lg:hidden z-0">
        <img src="/dawn.svg" alt="dawn" className="block relative left-[-4rem] top-10 w-[13%] -z-10"></img>
        <img src="/explosion.svg" alt="explosion" className="block relative left-[1rem] top-[10rem] w-[12%] -z-10"></img>
        <div className="absolute lt:left-[6rem] left-[9rem] top-[18rem] flex-col items-center w-fit z-0">
          <div className="font-bold text-5xl relative left-[1.5rem] lt:left-[4rem] lt:text-4xl z-0">Мы за детские улыбки!</div>
          <div className="text-xl mt-[1.2rem] lt:text-lg font-medium z-0">Помогаем детям с непростой судьбой заниматься творчеством</div>
        </div>
        <div className="grid grid-cols-2 gap-6 w-fit absolute lt:left-[6rem] left-[9rem] top-[26rem] z-0">
          <button className="text-gray-04 bg-primary text-xl rounded-2xl shadow-xl px-9 py-5 lt:px-5 lt:py-3 lt:text-lg z-0">Записаться на занятия</button>
          <button className="text-gray-04 bg-white text-xl rounded-2xl shadow-xl px-9 py-5 lt:px-5 lt:py-3 lt:text-lg z-0">Узнать расписание</button>
          <button className="text-white bg-gray-04 text-xl rounded-2xl shadow-xl px-9 py-5 relative left-[10rem] lt:px-5 lt:py-3 lt:text-lg z-0"><img src="/support_project.svg" alt="support_project" className="inline mr-3"/>Поддержать проект</button>
        </div>
        <img src="/spiral_top.svg" alt="spiral" className="block absolute top-[60%] right-[35%] w-[16%] -z-10"></img>
        <img src="/homepage_main_photo.svg" alt="main_photo" className="block absolute top-[10rem] right-[-8rem] w-[48%] overflow-hidden z-0"></img>
      </div>

      <div className="relative grid grid-cols-1 gap-5 ml-[21rem] top-[23rem] w-[50rem] text-[24px] leading-7 font-medium z-0">
        <div className="z-0">Наша цель — помогать детям в трудных жизненных ситуациях, обеспечивая им возможности для творчества и развития.</div>
        <div>Занятия проводятся для детей с четырёх лет в группах по 4—6 человек.</div>
        <div>В нашей студии дети обучаются основам изобразительного и декоративно-прикладного искусства под руководством опытных преподавателей. Это улучшает их когнитивные способности и даёт положительные эмоции.</div>
        <div>У нас все дети равны и занимаются вместе. Это помогает им адаптироваться в обществе и улучшить коммуникативные навыки.</div>
      </div>

      <img src="./waves.svg" alt="waves" className="block absolute right-[3rem] top-[52rem] width-[50%] -z-10"></img>
      <img src="./spiral4.svg" alt="spiral" className="block absolute left-[3rem] top-[63rem] -z-10"></img>

      <div className="relative ml-[21rem] top-[30rem] grid grid-cols-1 gap-10 z-0"> 
        <div className="text-5xl font-bold z-0">У нас занимаются бесплатно:</div>
        <div className="flex flex-wrap flex-row w-[52rem] z-0">
          <div className="text-gray-04 bg-primary text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5 z-0">Дети, воспитываемые одним родителем</div>
          <div className="text-gray-04 bg-primary text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5 z-0">Сироты</div>
          <div className="text-gray-04 bg-primary text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5 z-0">Дети участников СВО</div>
          <div className="text-gray-04 bg-primary text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5 z-0">Дети из малоимущих семей</div>
          <div className="text-gray-04 bg-primary text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5 z-0">Дети из многодетных семей</div>
          <div className="text-gray-04 bg-primary text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5 z-0">Дети с инвалидностью</div>
          <div className="text-gray-04 bg-primary text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5 z-0">Дети, родители которых являются инвалидами</div>
        </div>
        <div className="text-[24px] font-medium w-[50rem] z-0">Если вы хотите заниматься у нас, но не входите ни в одну из категорий, можете записаться на платной основе.</div>
        <button className="text-gray-04 bg-primary text-xl rounded-2xl shadow-xl w-fit py-4 px-11 text-[20px] font-normal z-0">Записаться</button>
      </div>

      <img src="./spiral2.svg" alt="big_spiral" className="block absolute left-[0rem] top-[90rem] -z-10"></img>
      <img src="./big_dawn.svg" alt="big_dawn" className="block absolute right-[0rem] top-[90rem] -z-10"></img>

      <div className="relative top-[38rem] grid grid-cols-1 gap-10 z-0">
        <div className="text-5xl ml-[21rem] font-bold relative left-[10rem]">Наши программы</div>
        <div className="ml-[5rem] grid grid-cols-3">
          <ItemOfListOurPrograms title="Раннее творческое развитие" age="4 года" childrenNum="4 человека в группе" imgSrc="/imgOurPrograms1.svg"/>
          <ItemOfListOurPrograms title="Художественное творчество" age="5-6 лет" childrenNum="4 человека в группе" imgSrc="/imgOurPrograms2.svg"/>
          <ItemOfListOurPrograms title="Основы художественного образования" age="7-8 лет" childrenNum="4 человека в группе" imgSrc="/imgOurPrograms3.svg"/>
          <ItemOfListOurPrograms title="Основы художественного образования" age="8-9 лет" childrenNum="4 человека в группе" imgSrc="/imgOurPrograms4.svg"/>
          <ItemOfListOurPrograms title="Основы художественного образования" age="9-11 лет" childrenNum="6 человек в группе" imgSrc="/imgOurPrograms5.svg"/>
          <ItemOfListOurPrograms title="Индивидуальные коррекционные занятия" age="4-11 лет" childrenNum="" imgSrc="/imgOurPrograms6.svg"/>
        </div>
      </div>

      <div className="relative top-[50rem] grid grid-cols-1 gap-10 z-0">
        <div className="text-5xl font-bold relative z-0 ml-[24rem]">Почему рисование полезно</div>
        <img src="/dawnCenter.svg" alt="dawn" className="block absolute left-[1rem] top-[0rem] w-[28%] -z-10"></img>
        <img src="/explosionReverse.svg" alt="explosion" className="block absolute left-[1rem] top-[28rem] w-[20%] -z-10"></img>
        <img src="./spiral5.svg" alt="spiral" className="block absolute right-[5rem] top-[8rem] w-[28%] -z-10"></img>
        <div className="grid grid-cols-1 gap-0 z-0 ml-[24rem]">
          <div className="text-gray-04 bg-primary text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Учит быть нацеленным на результат</div>
          <div className="text-gray-04 bg-primary text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Позволяет справиться со стрессом</div>
          <div className="text-gray-04 bg-primary text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Развивает воображение</div>
          <div className="text-gray-04 bg-primary text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Развивает пространственное мышление</div>
          <div className="text-gray-04 bg-primary text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Развивает ассоциативное мышление </div>
          <div className="text-gray-04 bg-primary text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Позволяет самовыражаться</div>
          <div className="text-gray-04 bg-primary text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Улучшает память и внимание</div>
          <div className="text-gray-04 bg-primary text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Развивает мелкую моторику</div>
          <div className="text-gray-04 bg-primary text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Даёт эмоциональную устойчивость</div>
        </div>
      </div>

      <div className="relative ml-[1rem] mr-[2rem] top-[55rem] z-0">
        <div className="text-5xl font-bold relative ml-[30rem]">Где мы находимся?</div>
        <div className="grid grid-rows-1">
          <div className="w-full mt-[3rem] grid grid-cols-1">
          <div className="text-white bg-primary text-xl rounded-[1rem] w-fit h-fit py-4 px-[4.5rem] text-[22px] font-normal ml-[1.5rem]">г. Омск, ул. Энергетиков, 70</div>
            <img src="./sunbeam_studio.svg" alt="studio" className="rounded-[1rem] w-[30rem] left-0"></img>
          </div>
          <iframe className="rounded-[1rem] w-[58rem] h-[30rem] ml-[40rem] relative left-[-10rem] top-[-31rem]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5062605223816!2d73.27371800294775!3d55.04599080885763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43ab0076919eb677%3A0x4dd3b6c8f9aede9b!2z0YPQuy4g0K3QvdC10YDQs9C10YLQuNC60L7QsiwgNzAsINCe0LzRgdC6LCDQntC80YHQutCw0Y8g0L7QsdC7LiwgNjQ0MDg4!5e0!3m2!1sru!2sru!4v1694856076094!5m2!1sru!2sru" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div> 
      </div>

      <div className="relative justify-items-center top-[27rem] z-0">
        <div className="ml-[33rem]">
          <div className="font-medium text-[24px]">Остались вопросы? Звоните!</div>
          <div className="font-bold text-[24px] ml-[4rem]">+7 (913) 640-03-59</div>
        </div>
        <div className="grid grid-cols-2 gap-6 w-fit mt-[3rem] ml-[24rem]">
          <button className="text-gray-04 bg-primary text-xl rounded-2xl shadow-xl px-9 py-5 lt:px-5 lt:py-3 lt:text-lg">Записаться на занятия</button>
          <button className="text-gray-04 bg-white text-xl rounded-2xl shadow-xl px-9 py-5 lt:px-5 lt:py-3 lt:text-lg">Узнать расписание</button>
          <button className="text-white bg-gray-04 text-xl rounded-2xl shadow-xl px-9 py-5 relative left-[10rem] lt:px-5 lt:py-3 lt:text-lg"><img src="/support_project.svg" alt="support_project" className="inline mr-3"/>Поддержать проект</button>
        </div>        
      </div>

      <div className="lg:block xl:hidden wide:hidden w-fit">
        <img src="/explosion.svg" alt="explosion" className="lg:absolute lg:block lg:top-[4rem] lg:right-[0.5rem] lg:w-[30%]"></img>
        <img src="/spiral_top.svg" alt="spiral" className="lg:relative lg:block lg:top-[-4rem] lg:left-[0rem] lg:w-[10rem]"></img>
        <img src="/dawn.svg" alt="dawn" className="lg:absolute lg:right-[1rem] lg:top-[35rem] lg:w-[10rem]"></img>
        <img src="/homepage_main_photo.svg" alt="main_photo" className="lg:relative lg:block lg:mx-[14%] lg:top-[-13rem] lg:w-[100%]"></img>
        <div className="lg:relative lg:top-[-10rem] lg:left-[3rem] flex-col w-fit">
          <div className="font-bold text-5xl">Мы за детские улыбки!</div>
          <div className="text-xl mt-[1.2rem] font-medium">Помогаем детям с непростой судьбой заниматься творчеством</div>
        </div>
        <div className="lg:relative lg:top-[-8rem] lg:left-[6%] lg:grid lg:grid-cols-1 lg:gap-6 lg:w-[115%]">
          <button className="text-gray-04 bg-primary text-xl rounded-2xl shadow-xl px-9 py-6">Записаться на занятия</button>
          <button className="text-gray-04 bg-white text-xl rounded-2xl shadow-xl px-9 py-6">Узнать расписание</button>
          <button className="text-white bg-gray-04 text-xl rounded-2xl shadow-xl px-9 py-6"><img src="/support_project.svg" alt="support_project" className="inline mr-3"/>Поддержать проект</button>
        </div>
      </div>
    </main>
  )
}
