import Layout from "@/components/Layout"
import ky from '@/ky'
import ListOurPrograms from "@/components/ListOurPrograms"

export const revalidate = 2 // change in prod

export default async function Home() {

  const listElementsStyle="text-gray-04 bg-primary text-xl rounded-[5rem] w-fit py-3 px-8 font-normal mr-5 mb-5 z-0 md:text-[16px] md:px-4 md:py-2 md:w-[90vw]"
  const ourPrograms = await ky.get('api/our-programs?populate[0]=image').json()

  return (
    <Layout>
      <main className="wide:w-[80%] xl:w-[100%] lg:w-[80%] md:w-[100%] mx-auto grid grid-cols-1 h-fit items-center z-0">

        <div className="z-0">
          <img 
            src="/dawn.svg" alt="dawn" 
            className="
              wide:left-[10rem] wide:top-[10rem]
              block absolute xl:left-[-4rem] xl:top-[10rem] w-[13%] -z-10 
              lg:w-[8rem] lg:right-[6rem] lg:left-auto lg:top-[39rem]
              mg:right-[1rem] mg:top-[26rem]
              md:w-[8rem] md:right-[1rem] md:left-auto md:top-[35rem]
            "/>
          <img 
            src="/explosion.svg" alt="explosion" 
            className="
              wide:left-[10rem] wide:top-[30rem]
              block absolute xl:left-[1rem] xl:top-[30rem] w-[12%] -z-10
              lg:w-[256px] lg:right-[5.5em] lg:left-auto lg:top-[3.5rem] 
              md:w-[256px] md:right-[-4.5rem] md:left-auto md:top-[2.5rem]
            "/>
          <img 
            src="/mainPageMobile.svg" alt="main_photo" 
            className="z-0
              zoom:hidden
              md:block md:relative md:top-[2rem] md:left-[0rem] md:w-full 
            "/>

          <img 
            src="/laptopBackgroundImage.svg" 
            alt="main_photo" className="
              block wide:absolute wide:top-[10rem] wide:right-0 wide:w-[40%] z-0
              lg:hidden 
              "/>

          <img
            src="/homepage_main_photo.svg" 
            alt="main_photo" className="
              zoom:hidden
              lg:block lg:relative lg:top-[2rem] lg:left-[0rem] lg:mx-auto lg:w-[80%]
              md:hidden 
              "/>

          <div className="
            wide:left-[13%]
            relative lt:left-[6rem] left-[9rem] top-[12rem] z-0
            lg:left-[2rem] lg:top-[4rem] lg:w-fit 
            md:left-[1rem] md:top-[4rem] md:w-[30rem] 
            sm:w-[18rem]
          ">
            <div className="
              font-bold text-5xl relative left-[1.5rem] z-0
              lt:left-[4rem] lt:text-4xl 
              lg:text-[36px] lg:leading-10 lg:left-0 
              md:text-[36px] md:leading-10 md:left-0
            ">Мы за детские улыбки!</div>
            <div className="
              font-medium text-xl mt-[1.2rem] z-0
              lt:text-lg
              lg:text-[18px] lg:mt-[1rem]
              md:text-[18px] md:mt-[1rem]
            ">Помогаем детям с непростой судьбой заниматься творчеством</div>
          </div>

          <div className="
            wide:left-[13%]
            relative lt:left-[6rem] left-[9rem] top-[13.5rem] grid grid-cols-2 gap-6 w-fit z-0
            lg:left-0 lg:top-[6rem] lg:grid-cols-1 lg:gap-4 lg:w-[90%] lg:mx-[2rem]
            md:left-0 md:top-[6rem] md:grid-cols-1 md:gap-4 md:w-[90%] md:mx-[2rem]
            sm:mx-[1rem]
            ">
            <button className="
              text-gray-04 bg-primary text-xl rounded-2xl shadow-xl px-9 py-5 z-0
              lt:px-5 lt:py-3 lt:text-lg
              lg:py-4
              ">Записаться на занятия</button>
            <button className="
              text-gray-04 bg-white text-xl rounded-2xl shadow-xl px-9 py-5 z-0
              lt:px-5 lt:py-3 lt:text-lg 
              lg:py-4
              "><a href="/schedule">Узнать расписание</a></button>
            <button className="
              text-white bg-gray-04 text-xl rounded-2xl shadow-xl px-9 py-5 relative left-[10rem]  z-0
              lt:px-5 lt:py-3 lt:text-lg
              lg:left-0 lg:py-4
              md:left-0 md:py-4
              "><img src="/coins-stacked-03.svg" alt="support_project" className="inline mr-3"/>Поддержать проект</button>
          </div>

          <img 
            src="/spiral_top.svg" alt="spiral" 
            className="
              wide:right-[45rem] wide:top-[30rem]
              block absolute xl:top-[28rem] xl:right-[32rem] w-[16%] -z-10
              lg:w-[9rem] lg:right-auto lg:left-[8rem] lg:top-[6.5rem] 
              md:w-[9rem] md:right-auto md:left-[-1.5rem] md:top-[6.5rem]
              
            "/>
        </div>


        <div className="
          wide:mt-[40rem]
          grid grid-cols-1 gap-5 mx-auto w-[50%] text-[24px] xl:mt-[28rem] leading-7 font-medium z-0
          lt:text-[22px]
          lg:mx-[1.5rem] lg:w-fit lg:text-[20px] lg:mt-[8rem]
          md:mx-[1.5rem] md:w-fit md:text-[20px] md:mt-[8rem]
          ">
          <img 
          src="./spiral4.svg" alt="spiral" 
          className="
            wide:left-[12rem] wide:top-[63rem]
            block absolute xl:left-[3rem] xl:top-[63rem] w-[15%] -z-10
            lg:relative lg:left-auto lg:top-auto lg:mx-auto lg:mb-[2rem] lg:w-[26%]
            md:relative md:left-auto md:top-auto md:mx-auto md:mb-[2rem]
            sm:w-[13rem]
          "/>
          <div>Наша цель — помогать детям в трудных жизненных ситуациях, обеспечивая им возможности для творчества и развития.</div>
          <div>Занятия проводятся для детей с четырёх лет в группах по 4—6 человек.</div>
          <div>В нашей студии дети обучаются основам изобразительного и декоративно-прикладного искусства под руководством опытных преподавателей. Это улучшает их когнитивные способности и даёт положительные эмоции.</div>
          <div>У нас все дети равны и занимаются вместе. Это помогает им адаптироваться в обществе и улучшить коммуникативные навыки.</div>
          <img 
            src="./waves.svg" alt="waves" 
            className="
              wide:right-[12rem] wide:top-[63rem]
              block absolute xl:right-[3rem] xl:top-[52rem] w-[20%] -z-10
              lg:relative lg:left-auto lg:top-auto lg:mx-auto lg:w-[26%]
              md:relative md:left-auto md:top-auto md:mx-auto 
              sm:w-[13rem] sm:mx-auto
            "/>
        </div>


        <div className="
          grid grid-cols-1 gap-10 mx-auto mt-[8rem] z-0
          lg:mx-[1.5rem] lg:mt-[2rem] lg:gap-6
          md:mx-[1.5rem] md:mt-[2rem] md:gap-6
        "> 
          <div className="text-5xl lt:text-4xl md:text-[36px] font-bold z-0">У нас занимаются бесплатно:</div>
          <div className="
            flex flex-wrap flex-row w-[52rem] z-0
            lg:flex-row lg:w-[52rem]
            mg:flex-col
          ">
            <div className={listElementsStyle}>Дети, воспитываемые одним родителем</div>
            <div className={listElementsStyle}>Сироты</div>
            <div className={listElementsStyle}>Дети участников СВО</div>
            <div className={listElementsStyle}>Дети из малоимущих семей</div>
            <div className={listElementsStyle}>Дети из многодетных семей</div>
            <div className={listElementsStyle}>Дети с инвалидностью</div>
            <div className={listElementsStyle}>Дети, родители которых являются инвалидами</div>
          </div>
          <div className="text-[24px] font-medium w-[50rem] md:text-[20px] lg:w-fit md:w-fit z-0 ssm:text-[18px]">Если вы хотите заниматься у нас, но не входите ни в одну из категорий, можете записаться на платной основе.</div>
          <button className="text-gray-04 bg-primary text-xl rounded-2xl shadow-xl w-fit py-4 px-11 text-[20px] font-normal z-0">Записаться</button>

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
          <ListOurPrograms ourPrograms={ourPrograms}/>

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
            sm:ml-[0.5rem] sm:w-[90%]
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
                text-white bg-primary text-xl rounded-[1rem] h-fit py-4 text-center w-[92%] font-normal
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
              text-gray-04 bg-primary text-xl rounded-2xl shadow-xl px-9 py-5  
              lt:px-5 lt:py-3 lt:text-lg
              lg:py-4
              md:py-4
              ">Записаться на занятия</button>
            <button className="
              text-gray-04 bg-white text-xl rounded-2xl shadow-xl px-9 py-5 
              lt:px-5 lt:py-3 lt:text-lg
              lg:py-4
              md:py-4
              ">Узнать расписание</button>
            <button className="
              text-white bg-gray-04 text-xl rounded-2xl shadow-xl px-9 py-5 relative left-[10rem] 
              lt:px-5 lt:py-3 lt:text-lg
              lg:left-0 lg:py-4
              md:left-0 md:py-4
              ">
              <img src="/coins-stacked-03.svg" alt="support_project" className="inline mr-3"/>
            Поддержать проект</button>
          </div>        
        </div>
      </main>
    </Layout>
  )
}