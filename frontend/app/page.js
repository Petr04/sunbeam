import ItemOfListOurPrograms from "./_components/ItemOfListOurPrograms"

export default function Home() {

  const listElementsStyle="text-black bg-yellowText text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5 z-0 md:w-[65%]"

  return (
    <main className="lg:w-[80%] md:w-[100%] grid grid-cols-1 xl:h-fit items-center z-0">

      <div className="z-0">
        <img 
          src="/dawn.svg" alt="dawn" 
          className="
            block absolute xl:left-[-4rem] xl:top-[10rem] w-[13%] -z-10 
            md:w-[8rem] md:right-[-3rem] md:left-auto md:top-[35rem]
          "/>
        <img 
          src="/explosion.svg" alt="explosion" 
          className="
            block absolute xl:left-[1rem] xl:top-[30rem] xl:w-[12%] 
            md:w-[256px] md:right-[-4.5rem] md:left-auto md:top-[2.5rem] -z-10
          "/>
        <img 
          src="/mainPageMobile.svg" alt="main_photo" 
          className="xl:hidden lg:hidden md:block md:relative md:top-[2rem] md:left-[0rem] md:w-full z-10"/>

        <div className="
          relative lt:left-[6rem] xl:left-[9rem] xl:top-[12rem] 
          md:left-[1rem] md:top-[4rem] md:w-[30rem] z-0
        ">
          <div className="
            font-bold xl:text-5xl relative xl:left-[1.5rem] lt:left-[4rem] lt:text-4xl 
            md:text-[36px] md:leading-10 md:left-0 z-0
          ">Мы за детские улыбки!</div>
          <div className="
            font-medium xl:text-xl xl:mt-[1.2rem] lt:text-lg 
            md:text-[18px] md:mt-[1rem] z-0
          ">Помогаем детям с непростой судьбой заниматься творчеством</div>
        </div>

        <div className="
          relative lt:left-[6rem] xl:left-[9rem] xl:top-[13.5rem] grid xl:grid-cols-2 xl:gap-6 xl:w-fit z-0
          md:left-0 md:top-[6rem] md:grid-cols-1 md:gap-4 md:w-[90%] md:mx-[2rem]">
          <button className="
            text-black bg-yellowText text-xl rounded-2xl shadow-xl px-9 py-5 lt:px-5 lt:py-3 lt:text-lg z-0
            md:py-4
            ">Записаться на занятия</button>
          <button className="
            text-black bg-white text-xl rounded-2xl shadow-xl px-9 py-5 lt:px-5 lt:py-3 lt:text-lg z-0
            md:py-4
            ">Узнать расписание</button>
          <button className="
            text-white bg-blackBg text-xl rounded-2xl shadow-xl px-9 py-5 relative left-[10rem] lt:px-5 lt:py-3 lt:text-lg z-0
            md:left-0 md:py-4
            "><img src="/support_project.svg" alt="support_project" className="inline mr-3"/>Поддержать проект</button>
        </div>

        <img 
          src="/spiral_top.svg" alt="spiral" 
          className="
            block absolute top-[57%] right-[35%] w-[16%] 
            md:w-[9rem] md:right-auto md:left-[-1.5rem] md:top-[6.5rem] -z-10
          "/>
        <img 
          src="/homepage_main_photo.svg" 
          alt="main_photo" className="xl:block lg:block md:hidden xl:absolute xl:top-[10rem] xl:right-[-8rem] xl:w-[48%] z-0"/>
      </div>


      <div className="
        grid grid-cols-1 gap-5 ml-[21rem] w-[50rem] text-[24px] mt-[28rem] leading-7 font-medium z-0
        md:mx-[1.5rem] md:w-fit md:text-[20px] md:mt-[8rem]
        ">
        <img 
        src="./spiral4.svg" alt="spiral" 
        className="
          block absolute left-[3rem] top-[63rem] -z-10
          md:relative md:left-auto md:top-auto md:ml-[10rem] md:mb-[2rem]
        "/>
        <div>Наша цель — помогать детям в трудных жизненных ситуациях, обеспечивая им возможности для творчества и развития.</div>
        <div>Занятия проводятся для детей с четырёх лет в группах по 4—6 человек.</div>
        <div>В нашей студии дети обучаются основам изобразительного и декоративно-прикладного искусства под руководством опытных преподавателей. Это улучшает их когнитивные способности и даёт положительные эмоции.</div>
        <div>У нас все дети равны и занимаются вместе. Это помогает им адаптироваться в обществе и улучшить коммуникативные навыки.</div>
        <img 
          src="./waves.svg" alt="waves" 
          className="
            block absolute right-[3rem] top-[52rem] width-[50%] -z-10
            md:relative md:left-auto md:top-auto md:ml-[10rem]
          "/>
      </div>


      <div className="
        ml-[21rem] grid grid-cols-1 gap-10 mt-[8rem] z-0
        md:mx-[1.5rem] md:mt-[6rem] md:gap-6
      "> 
        <div className="text-5xl md:text-[36px] font-bold z-0">У нас занимаются бесплатно:</div>
        <div className="
          flex flex-wrap flex-row w-[52rem] z-0
          md:flex-col
        ">
          <div className={listElementsStyle}>Дети, воспитываемые одним родителем</div>
          <div className={listElementsStyle}>Сироты</div>
          <div className={listElementsStyle}>Дети участников СВО</div>
          <div className={listElementsStyle}>Дети из малоимущих семей</div>
          <div className={listElementsStyle}>Дети из многодетных семей</div>
          <div className={listElementsStyle}>Дети с инвалидностью</div>
          <div className={listElementsStyle}>Дети, родители которых являются инвалидами</div>
        </div>
        <div className="text-[24px] font-medium w-[50rem] md:text-[20px] md:w-fit z-0">Если вы хотите заниматься у нас, но не входите ни в одну из категорий, можете записаться на платной основе.</div>
        <button className="text-black bg-yellowText text-xl rounded-2xl shadow-xl w-fit py-4 px-11 text-[20px] font-normal z-0">Записаться</button>

        <img 
          src="./spiral2.svg" alt="big_spiral" 
          className="
            block absolute left-[0rem] top-[86rem] -z-10
            md:hidden
          "/>
        <img 
          src="./big_dawn.svg" alt="big_dawn" 
          className="
          block absolute right-[0rem] top-[74rem] -z-10
          md:hidden  
        "/>
        <img 
          src="./zigzag.svg" alt="zigzag" 
          className="
          xl:hidden
          md:block md:relative md:ml-[9rem] md:mt-[3rem] -z-10
        "/>
      </div>


      <div className="
        grid grid-cols-1 mt-[8rem] z-0
        md:mx-[1.5rem] md:mt-[4rem]
      ">
        <div className="
          text-5xl mx-auto mb-[2rem] font-bold
          md:left-[0rem] md:text-[36px]  
        ">Наши программы</div>
        <div className="
          ml-[5rem] grid grid-cols-3
          md:grid-cols-1
        ">
          <ItemOfListOurPrograms title="Раннее творческое развитие" age="4 года" childrenNum="4 человека в группе" imgSrc="/imgOurPrograms1.svg"/>
          <ItemOfListOurPrograms title="Художественное творчество" age="5-6 лет" childrenNum="4 человека в группе" imgSrc="/imgOurPrograms2.svg"/>
          <ItemOfListOurPrograms title="Основы художественного образования" age="7-8 лет" childrenNum="4 человека в группе" imgSrc="/imgOurPrograms3.svg"/>
          <ItemOfListOurPrograms title="Основы художественного образования" age="8-9 лет" childrenNum="4 человека в группе" imgSrc="/imgOurPrograms4.svg"/>
          <ItemOfListOurPrograms title="Основы художественного образования" age="9-11 лет" childrenNum="6 человек в группе" imgSrc="/imgOurPrograms5.svg"/>
          <ItemOfListOurPrograms title="Индивидуальные коррекционные занятия" age="4-11 лет" childrenNum="" imgSrc="/imgOurPrograms6.svg"/>
        </div>

        <img 
          src="./lightWaves.svg" alt="lightwaves" 
          className="
          xl:hidden
          md:block md:relative md:ml-[9rem] md:mt-[2rem] -z-10
        "/>
      </div>

      <div className="
        grid grid-cols-1 gap-10 mt-[8rem] z-0
        md:mx-[1.5rem] md:mt-[4rem] md:gap-6
        ">
        <div className="text-5xl md:text-[36px] font-bold relative z-0 mx-auto">Почему рисование полезно</div>
        <div className="
          grid grid-cols-1 gap-0 z-0 ml-[24rem]
          md:flex md:flex-wrap md:flex-col md:w-[52rem] md:realtive md:mx-auto
          ">
          <div className={listElementsStyle}>Учит быть нацеленным на результат</div>
          <div className={listElementsStyle}>Позволяет справиться со стрессом</div>
          <div className={listElementsStyle}>Развивает воображение</div>
          <div className={listElementsStyle}>Развивает пространственное мышление</div>
          <div className={listElementsStyle}>Развивает ассоциативное мышление </div>
          <div className={listElementsStyle}>Позволяет самовыражаться</div>
          <div className={listElementsStyle}>Улучшает память и внимание</div>
          <div className={listElementsStyle}>Развивает мелкую моторику</div>
          <div className={listElementsStyle}>Даёт эмоциональную устойчивость</div>
        </div>

        <img 
          src="/dawnCenter.svg" alt="dawn" 
          className="
            block absolute left-[1rem] top-[204rem] w-[26%] -z-10
            md:hidden
          "/>
        <img 
          src="/explosionReverse.svg" alt="explosion" 
          className="
            block absolute left-[0rem] top-[235rem] w-[18%] -z-10
            md:hidden
          "/>
        <img 
          src="./spiral5.svg" alt="spiral" 
          className="
            block absolute right-[6rem] top-[216rem] w-[26%] -z-10
            md:hidden
          "/>

        <img 
          src="./spiralBetween.svg" alt="spiralbetween" 
          className="
          xl:hidden
          md:block md:relative md:left-[9rem] md:top-[0rem] -z-10
        "/>

      </div>


      <div className="mt-[4rem] z-0">
        <div className="text-5xl font-bold relative ml-[30rem] mb-[2rem] md:text-[36px] md:ml-[7rem]">Где мы находимся?</div>
        <div className="
          text-white bg-yellowText text-xl rounded-[1rem] w-fit h-fit py-4 px-[5.5rem] font-normal ml-[1.5rem]
          md:px-[8rem]
          ">г. Омск, ул. Энергетиков, 70</div>
        <img 
          src="./sunbeam_studio.svg" alt="studio" 
          className="rounded-[1rem] w-[32rem] left-0 md:w-full"/>
        <iframe 
          className="
            rounded-[1rem] w-[56rem] h-[31rem] ml-[40rem] absolute right-[3rem] top-[261.5rem]
            md:relative md:w-[34rem] md:h-[32rem] md:ml-[1.5rem] md:right-auto md:top-auto" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5062605223816!2d73.27371800294775!3d55.04599080885763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43ab0076919eb677%3A0x4dd3b6c8f9aede9b!2z0YPQuy4g0K3QvdC10YDQs9C10YLQuNC60L7QsiwgNzAsINCe0LzRgdC6LCDQntC80YHQutCw0Y8g0L7QsdC7LiwgNjQ0MDg4!5e0!3m2!1sru!2sru!4v1694856076094!5m2!1sru!2sru" 
          allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>

        <img 
          src="./heavyWaves.svg" alt="heavywaves" 
          className="
          xl:hidden
          md:block md:relative md:left-[11rem] md:top-[2rem] -z-10
        "/>
      </div>

      <div className="z-0 md:mt-[4rem]">
        <div className="ml-[33rem] md:ml-[7rem]">
          <div className="font-medium text-[24px]">Остались вопросы? Звоните!</div>
          <div className="font-bold text-[24px] ml-[4rem]">+7 (913) 640-03-59</div>
        </div>
        <div className="
          grid grid-cols-2 gap-6 w-fit mt-[3rem] ml-[24rem]
          md:grid-cols-1 md:gap-4 md:w-[90%] md:ml-[2rem]">
          <button className="
            text-black bg-yellowText text-xl rounded-2xl shadow-xl px-9 py-5 lt:px-5 lt:py-3 lt:text-lg
            md:py-4
            ">Записаться на занятия</button>
          <button className="
            text-black bg-white text-xl rounded-2xl shadow-xl px-9 py-5 lt:px-5 lt:py-3 lt:text-lg
            md:py-4
            ">Узнать расписание</button>
          <button className="
            text-white bg-blackBg text-xl rounded-2xl shadow-xl px-9 py-5 relative left-[10rem] lt:px-5 lt:py-3 lt:text-lg
            md:left-0 md:py-4
            "><img src="/support_project.svg" alt="support_project" className="inline mr-3"/>Поддержать проект</button>
        </div>        
      </div>
    </main>
  )
}
