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
          <button className="text-black bg-yellowText text-xl rounded-2xl shadow-xl px-9 py-5 lt:px-5 lt:py-3 lt:text-lg z-0">Записаться на занятия</button>
          <button className="text-black bg-white text-xl rounded-2xl shadow-xl px-9 py-5 lt:px-5 lt:py-3 lt:text-lg z-0">Узнать расписание</button>
          <button className="text-white bg-blackBg text-xl rounded-2xl shadow-xl px-9 py-5 relative left-[10rem] lt:px-5 lt:py-3 lt:text-lg z-0"><img src="/support_project.svg" alt="support_project" className="inline mr-3"/>Поддержать проект</button>
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
          <div className="text-black bg-yellowText text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5 z-0">Дети, воспитываемые одним родителем</div>
          <div className="text-black bg-yellowText text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5 z-0">Сироты</div>
          <div className="text-black bg-yellowText text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5 z-0">Дети участников СВО</div>
          <div className="text-black bg-yellowText text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5 z-0">Дети из малоимущих семей</div>
          <div className="text-black bg-yellowText text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5 z-0">Дети из многодетных семей</div>
          <div className="text-black bg-yellowText text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5 z-0">Дети с инвалидностью</div>
          <div className="text-black bg-yellowText text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5 z-0">Дети, родители которых являются инвалидами</div>
        </div>
        <div className="text-[24px] font-medium w-[50rem] md:text-[20px] lg:w-fit md:w-fit z-0 ssm:text-[18px]">Если вы хотите заниматься у нас, но не входите ни в одну из категорий, можете записаться на платной основе.</div>
        <button className="text-black bg-yellowText text-xl rounded-2xl shadow-xl w-fit py-4 px-11 text-[20px] font-normal z-0">Записаться</button>

        <img 
          src="./spiral2.svg" alt="big_spiral" 
          className="
            wide:top-[100rem] wide:w-[15%]
            block absolute left-[0rem] xl:top-[86rem] xl:w-[20%] -z-10
            lt:w-[15%]
            lg:hidden
          "/>
        <img 
          src="./big_dawn.svg" alt="big_dawn" 
          className="
          wide:top-[90rem] wide:w-[15%]
          block absolute right-[0rem] xl:top-[74rem] xl:w-[20%] -z-10
          lt:w-[18%]
          lg:hidden  
        "/>
        <img 
          src="./zigzag.svg" alt="zigzag" 
          className="
          wide:hidden -z-10
          lg:block lg:relative lg:mx-auto lg:mt-[0rem] lg:w-[30%]
          md:block md:relative md:mx-auto md:mt-[3rem]
          sm:w-[15rem]
        "/>
      </div>


      <div className="
        grid grid-cols-1 mx-auto mt-[8rem] z-0
        lg:mx-[1.5rem] lg:mt-[2rem]
        md:mx-[1.5rem] md:mt-[4rem]
      ">
        <div className="
          text-5xl mx-auto mb-[2rem] font-bold
          lt:text-4xl
          lg:mx-auto lg:text-[36px]  
          md:mx-auto md:text-[36px]  
          ssm:text-[30px]
        ">Наши программы</div>
        <div className="
          mx-auto grid grid-cols-3 gap-4
          lt:gap-0
          lg:grid-cols-2 lg:gap-4
          mg:grid-cols-1
        ">
          {/* {ourPrograms.map((ourProgram) =>
            <ItemOfListOurPrograms key={ourProgram.id} {...ourProgram}/>
          )} */}
          <ItemOfListOurPrograms title="Раннее творческое развитие" childrenAge="4 года" numOfChildren="4 человека в группе" image="/imgOurPrograms1.svg"/>
          <ItemOfListOurPrograms title="Художественное творчество" childrenAge="5-6 лет" numOfChildren="4 человека в группе" image="/imgOurPrograms2.svg"/>
          <ItemOfListOurPrograms title="Основы художественного образования" childrenAge="7-8 лет" numOfChildren="4 человека в группе" image="/imgOurPrograms3.svg"/>
          <ItemOfListOurPrograms title="Основы художественного образования" childrenAge="8-9 лет" numOfChildren="4 человека в группе" image="/imgOurPrograms4.svg"/>
          <ItemOfListOurPrograms title="Основы художественного образования" childrenAge="9-11 лет" numOfChildren="6 человек в группе" image="/imgOurPrograms5.svg"/>
          <ItemOfListOurPrograms title="Индивидуальные коррекционные занятия" childrenAge="4-11 лет" numOfChildren="" image="/imgOurPrograms6.svg"/>
        </div>

        <img 
          src="./lightWaves.svg" alt="lightwaves" 
          className="
          wide:hidden -z-10
          lg:block lg:relative lg:mx-auto lg:mt-[2rem] lg:w-[30%]
          md:block md:relative md:mx-auto md:mt-[2rem] 
          sm:w-[15rem]
        "/>
      </div>

      <div className="
        grid grid-cols-1 gap-10 mx-auto mt-[8rem] z-0
        lg:mx-[1.5rem] lg:mt-[4rem] lg:gap-6
        md:mx-[1.5rem] md:mt-[4rem] md:gap-6
        ">
        <div className="text-5xl lt:text-4xl md:text-[36px] ssm:text-[30px] font-bold relative z-0">Почему рисование полезно</div>
        <div className="
          grid grid-cols-1 gap-0 z-0
          lg:flex lg:flex-wrap lg:flex-col lg:w-[52rem] lg:realtive lg:mx-auto
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
            wide:left-[10rem] wide:top-[210rem] wide:w-[15%]
            block absolute xl:left-[1rem] xl:top-[210rem] xl:w-[24%] -z-10
            lg:hidden
          "/>
        <img 
          src="/explosionReverse.svg" alt="explosion" 
          className="
            wide:top-[235rem] wide:w-[15%]
            block absolute left-[0rem] xl:top-[235rem] xl:w-[16%] -z-10
            lg:hidden
          "/>
        <img 
          src="./spiral5.svg" alt="spiral" 
          className="
            wide:right-[15rem] wide:top-[220rem] wide:w-[15%]
            block absolute xl:right-[6rem] xl:top-[216rem] xl:w-[24%] -z-10
            lg:hidden
          "/>

        <img 
          src="./spiralBetween.svg" alt="spiralbetween" 
          className="
          wide:hidden -z-10
          lg:block lg:relative lg:mx-auto lg:top-[0rem] lg:w-[30%]
          md:block md:relative md:mx-auto md:top-[0rem] 
          sm:w-[15rem]
        "/>

      </div>


      <div className="mx-auto grid grid-cols-1 w-full mt-[4rem] lg:mt-[2rem] z-0">
        <div className="
          text-5xl font-bold relative mb-[2rem] text-center
          lt:text-4xl
          lg:text-[36px] 
          md:text-[36px] md:ml-[7rem]
          sm:ml-0
          ssm:text-[30px]
          ">Где мы находимся?</div>

        <div className="
          wide:gap-0 
          realtive grid grid-cols-3 gap-2 xl:ml-[0rem]
          lg:grid-cols-1 lg:justify-items-center lg:grid-rows-3
          ">
          <div className="
            grid grid-cols-1 w-fit justify-items-center col-span-1
            lg:col-span-1 lg:w-full lg:h-fit lg:gap-3 lg:row-span-2
            ">
            <div className="
              text-white bg-yellowText text-xl rounded-[1rem] h-fit py-4 text-center w-[92%] font-normal
              lg:mx-auto 
              ssm:text-[18px]
              ">г. Омск, ул. Энергетиков, 70</div>
            <img 
              src="./sunbeam_studio.svg" alt="studio" 
              className="
                rounded-[1rem] w-full
                lg:w-full 
                "/>
          </div>
          <iframe 
            className="
              rounded-[1rem] w-[97%] h-[95%] col-span-2 
              lg:col-span-1 lg:w-[90%] lg:row-span-1
              sm:h-full" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5062605223816!2d73.27371800294775!3d55.04599080885763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43ab0076919eb677%3A0x4dd3b6c8f9aede9b!2z0YPQuy4g0K3QvdC10YDQs9C10YLQuNC60L7QsiwgNzAsINCe0LzRgdC6LCDQntC80YHQutCw0Y8g0L7QsdC7LiwgNjQ0MDg4!5e0!3m2!1sru!2sru!4v1694856076094!5m2!1sru!2sru" 
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
        </div>

        <img 
          src="./heavyWaves.svg" alt="heavywaves" 
          className="
          wide:hidden -z-10
          lg:block lg:relative lg:mx-auto lg:top-[2rem] lg:w-[30%]
          md:block md:relative md:mx-auto md:top-[2rem]
          sm:w-[15rem]
        "/>
      </div>

      <div className="z-0 mt-[4rem] mx-auto lg:w-full">
        <div className="wide:ml-[7rem] xl:mx-auto w-fit">
          <div className="font-medium text-[24px] lt:text-[22px] ssm:text-[20px] text-center">Остались вопросы? Звоните!</div>
          <div className="font-bold text-[24px] lt:text-[22px] ssm:text-[20px] text-center">+7 (913) 640-03-59</div>
        </div>
        <div className="
          grid grid-cols-2 gap-6 w-fit mt-[1rem] wide:ml-[-2rem] xl:mx-auto
          lg:grid-cols-1 lg:gap-6 lg:w-[90%] lg:mx-[2rem]
          md:grid-cols-1 md:gap-4 md:w-[90%] md:ml-[2rem]
          sm:ml-[1rem]">
          <button className="
            text-black bg-yellowText text-xl rounded-2xl shadow-xl px-9 py-5  
            lt:px-5 lt:py-3 lt:text-lg
            lg:py-4
            md:py-4
            ">Записаться на занятия</button>
          <button className="
            text-black bg-white text-xl rounded-2xl shadow-xl px-9 py-5 
            lt:px-5 lt:py-3 lt:text-lg
            lg:py-4
            md:py-4
            ">Узнать расписание</button>
          <button className="
            text-white bg-blackBg text-xl rounded-2xl shadow-xl px-9 py-5 relative left-[10rem] 
            lt:px-5 lt:py-3 lt:text-lg
            lg:left-0 lg:py-4
            md:left-0 md:py-4
            ">
            <img src="/support_project.svg" alt="support_project" className="inline mr-3"/>
          Поддержать проект</button>
        </div>        
      </div>
    </main>
  )
}
