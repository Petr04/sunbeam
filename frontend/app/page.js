export default function Home() {
  return (
    <main class="lg:wi-[80%] lg:p-[5rem]">
      <div class="realtive lg:hidden">
        <img src="/dawn.svg" alt="dawn" class="block relative left-[-4rem] top-10 w-[13%] "></img>
        <img src="/explosion.svg" alt="explosion" class="block relative left-[1rem] top-[10rem] w-[12%]"></img>
        <div class="absolute lt:left-[6rem] left-[9rem] top-[18rem] flex-col items-center w-fit ">
          <div class="font-bold text-5xl relative left-[1.5rem] lt:left-[4rem] lt:text-4xl ">Мы за детские улыбки!</div>
          <div class="text-xl mt-[1.2rem] lt:text-lg font-medium">Помогаем детям с непростой судьбой заниматься творчеством</div>
        </div>
        <div class="grid grid-cols-2 gap-6 w-fit absolute lt:left-[6rem] left-[9rem] top-[26rem]">
          <button class="text-black bg-yellow_text text-xl rounded-2xl shadow-xl px-9 py-5 lt:px-5 lt:py-3 lt:text-lg">Записаться на занятия</button>
          <button class="text-black bg-white text-xl rounded-2xl shadow-xl px-9 py-5 lt:px-5 lt:py-3 lt:text-lg">Узнать расписание</button>
          <button class="text-white bg-black_bg text-xl rounded-2xl shadow-xl px-9 py-5 relative left-[10rem] lt:px-5 lt:py-3 lt:text-lg"><img src="/support_project.svg" alt="support_project" class="inline mr-3"/>Поддержать проект</button>
        </div>
        <img src="/spiral_top.svg" alt="spiral" class="block absolute top-[60%] right-[35%] w-[16%]"></img>
        <img src="/homepage_main_photo.svg" alt="main_photo" class="block absolute top-[10rem] right-[-8rem] w-[48%]"></img>
      </div>

      <div class="relative grid grid-cols-1 gap-5 ml-[21rem] top-[23rem] w-[50rem] text-[24px] leading-7 font-medium">
        <div class="">Наша цель — помогать детям в трудных жизненных ситуациях, обеспечивая им возможности для творчества и развития.</div>
        <div>Занятия проводятся для детей с четырёх лет в группах по 4—6 человек.</div>
        <div>В нашей студии дети обучаются основам изобразительного и декоративно-прикладного искусства под руководством опытных преподавателей. Это улучшает их когнитивные способности и даёт положительные эмоции.</div>
        <div>У нас все дети равны и занимаются вместе. Это помогает им адаптироваться в обществе и улучшить коммуникативные навыки.</div>
      </div>

      <img src="./waves.svg" alt="waves" class="block absolute right-[3rem] top-[52rem]"></img>
      <img src="./spiral4.svg" alt="spiral" class="block absolute left-[3rem] top-[63rem]"></img>

      <div class="relative ml-[21rem] top-[30rem] grid grid-cols-1 gap-10"> 
        <div class="text-5xl font-bold">У нас занимаются бесплатно:</div>
        <div class="flex flex-wrap flex-row w-[52rem]">
          <div class="text-black bg-yellow_text text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Дети, воспитываемые одним родителем</div>
          <div class="text-black bg-yellow_text text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Сироты</div>
          <div class="text-black bg-yellow_text text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Дети участников СВО</div>
          <div class="text-black bg-yellow_text text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Дети из малоимущих семей</div>
          <div class="text-black bg-yellow_text text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Дети из многодетных семей</div>
          <div class="text-black bg-yellow_text text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Дети с инвалидностью</div>
          <div class="text-black bg-yellow_text text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Дети, родители которых являются инвалидами</div>
        </div>
        <div class="text-[24px] font-medium w-[50rem]">Если вы хотите заниматься у нас, но не входите ни в одну из категорий, можете записаться на платной основе.</div>
        <button class="text-black bg-yellow_text text-xl rounded-2xl shadow-xl w-fit py-4 px-11 text-[20px] font-normal">Записаться</button>
      </div>

      <img src="./spiral2.svg" alt="big_spiral" class="block absolute left-[0rem] top-[90rem]"></img>
      <img src="./big_dawn.svg" alt="big_dawn" class="block absolute right-[0rem] top-[90rem]"></img>

      <div class="relative ml-[21rem] top-[38rem] grid grid-cols-1 gap-10">
        <div class="text-5xl font-bold relative left-[10rem]">Наши программы</div>
        <div class="grid grid-cols-3">
          <div class="bg-yellow_text rounded-[3rem]">
            <img src="" alt="" class=""></img>
            <div></div>
            <div></div>
            <div></div>
            <button></button>
            <button></button>
          </div> 
        </div>
      </div>

      <div class="relative ml-[20rem] top-[40rem] grid grid-cols-1 gap-10">
        <div class="text-5xl font-bold relative ">Почему образование полезно</div>
        <div class="grid grid-cols-1 gap-0">
          <div class="text-black bg-yellow_text text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Учит быть нацеленным на результат</div>
          <div class="text-black bg-yellow_text text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Позволяет справиться со стрессом</div>
          <div class="text-black bg-yellow_text text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Развивает воображение</div>
          <div class="text-black bg-yellow_text text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Развивает пространственное мышление</div>
          <div class="text-black bg-yellow_text text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Развивает ассоциативное мышление </div>
          <div class="text-black bg-yellow_text text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Позволяет самовыражаться</div>
          <div class="text-black bg-yellow_text text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Улучшает память и внимание</div>
          <div class="text-black bg-yellow_text text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Развивает мелкую моторику</div>
          <div class="text-black bg-yellow_text text-xl rounded-[5rem] w-fit py-3 px-8 text-[22px] font-normal mr-5 mb-5">Даёт эмоциональную устойчивость</div>
        </div>
      </div>

      <div class="relative ml-[1rem] mr-[2rem] top-[46rem]">
        <div class="text-5xl font-bold relative ml-[26rem]">Где мы находимся?</div>
        <div class="grid grid-rows-1">
          <div class="w-full mt-[3rem] grid grid-cols-1">
          <div class="text-white bg-yellow_text text-xl rounded-[1rem] w-fit h-fit py-4 px-[4.5rem] text-[22px] font-normal ml-[1.5rem]">г. Омск, ул. Энергетиков, 70</div>
            <img src="./sunbeam_studio.svg" alt="studio" class="rounded-[1rem] w-[30rem] left-0"></img>
          </div>
          <iframe class="rounded-[1rem] w-[58rem] h-[30rem] ml-[40rem] relative left-[-10rem] top-[-31rem]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5062605223816!2d73.27371800294775!3d55.04599080885763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43ab0076919eb677%3A0x4dd3b6c8f9aede9b!2z0YPQuy4g0K3QvdC10YDQs9C10YLQuNC60L7QsiwgNzAsINCe0LzRgdC6LCDQntC80YHQutCw0Y8g0L7QsdC7LiwgNjQ0MDg4!5e0!3m2!1sru!2sru!4v1694856076094!5m2!1sru!2sru" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> 
      </div>

      <div class="relative justify-items-center top-[20rem] ">
        <div class="ml-[33rem]">
          <div class="font-medium text-[24px]">Остались вопросы? Звоните!</div>
          <div class="font-bold text-[24px] ml-[4rem]">+7 (913) 640-03-59</div>
        </div>
        <div class="grid grid-cols-2 gap-6 w-fit mt-[3rem] ml-[24rem]">
          <button class="text-black bg-yellow_text text-xl rounded-2xl shadow-xl px-9 py-5 lt:px-5 lt:py-3 lt:text-lg">Записаться на занятия</button>
          <button class="text-black bg-white text-xl rounded-2xl shadow-xl px-9 py-5 lt:px-5 lt:py-3 lt:text-lg">Узнать расписание</button>
          <button class="text-white bg-black_bg text-xl rounded-2xl shadow-xl px-9 py-5 relative left-[10rem] lt:px-5 lt:py-3 lt:text-lg"><img src="/support_project.svg" alt="support_project" class="inline mr-3"/>Поддержать проект</button>
        </div>        
      </div>

      <div class="lg:block xl:hidden wide:hidden w-fit">
        <img src="/explosion.svg" alt="explosion" class="lg:absolute lg:block lg:top-[4rem] lg:right-[0.5rem] lg:w-[30%]"></img>
        <img src="/spiral_top.svg" alt="spiral" class="lg:relative lg:block lg:top-[-4rem] lg:left-[0rem] lg:w-[10rem]"></img>
        <img src="/dawn.svg" alt="dawn" class="lg:absolute lg:right-[1rem] lg:top-[35rem] lg:w-[10rem]"></img>
        <img src="/homepage_main_photo.svg" alt="main_photo" class="lg:relative lg:block lg:mx-[14%] lg:top-[-13rem] lg:w-[100%]"></img>
        <div class="lg:relative lg:top-[-10rem] lg:left-[3rem] flex-col w-fit">
          <div class="font-bold text-5xl">Мы за детские улыбки!</div>
          <div class="text-xl mt-[1.2rem] font-medium">Помогаем детям с непростой судьбой заниматься творчеством</div>
        </div>
        <div class="lg:relative lg:top-[-8rem] lg:left-[6%] lg:grid lg:grid-cols-1 lg:gap-6 lg:w-[115%]">
          <button class="text-black bg-yellow_text text-xl rounded-2xl shadow-xl px-9 py-6">Записаться на занятия</button>
          <button class="text-black bg-white text-xl rounded-2xl shadow-xl px-9 py-6">Узнать расписание</button>
          <button class="text-white bg-black_bg text-xl rounded-2xl shadow-xl px-9 py-6"><img src="/support_project.svg" alt="support_project" class="inline mr-3"/>Поддержать проект</button>
        </div>
      </div>
    </main>
  )
}
