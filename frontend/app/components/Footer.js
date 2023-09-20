export default function Footer() {
  return (
    <div class="relative mt-[30rem] h-[288px] lg:h-[470px] md:h-[470px] bg-blackBg w-[100%] ">
      <div class="absolute left-[90px] top-[3rem] lg:left-[70px] md:left-[30px]">
        <div class="flex-col items-start">
          <img src="/logo_grey.svg" alt="logo" class=""></img>
          <div class="my-5"><button class="font-light text-greyText text-xl">ru</button><img src="/ru-en_grey.svg" alt="ru-en" class="inline mx-1" ></img></div>
        </div>
        <div class="grid grid-cols-2 gap-20 lg:grid-cols-1 lg:gap-2 md:grid-cols-1 md:gap-2">
          <div class="flex-col items-start">
            <div class='text-greyText text-lg font-semibold'>Контакты:</div>
            <div class='text-greyText text-lg'>ВК 2гис</div>
            <div class='text-greyText text-lg'>+7 (913) 640-03-59</div>
          </div>
          <div class="flex-col items-start">
            <div class='text-greyText text-lg'>© Луч солнца, 2023</div>
            <div class='text-greyText text-lg'>ИП Рыбин Д. А.</div>
            <div class='text-greyText text-lg'>ОГРНИП: 320723200066545</div>
          </div>
        </div>
      
      </div>
      <img src="/info_footer.svg" alt="payment" class="absolute bottom-[50px] right-[90px] lg:left-[70px] md:left-[30px]"></img>
    </div>
  )
}
