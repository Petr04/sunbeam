export default function Footer() {
    return (
        <div class="absolute bottom-0 h-[288px] lg:h-[470px] md:h-[470px] bg-black_bg w-[100%] ">
            <div class="absolute left-[90px] top-[3rem] lg:left-[70px] md:left-[30px]">
                <div class="flex-col items-start">
                    <img src="/logo_bw.png" alt="logo" class=""></img>
                    <div class="my-5"><button class="font-light text-grey_text text-xl">ru</button><img src="/ru-en_grey.png" alt="ru-en" class="inline mx-1" ></img></div>
                </div>
                <div class="grid grid-cols-2 gap-20 lg:grid-cols-1 lg:gap-2 md:grid-cols-1 md:gap-2">
                    <div class="flex-col items-start">
                        <div class='text-grey_text text-lg'>Контакты:</div>
                        <div class='text-grey_text text-lg'>ВК 2гис</div>
                        <div class='text-grey_text text-lg'>+7 (913) 640-03-59</div>
                    </div>
                    <div class="flex-col items-start">
                        <div class='text-grey_text text-lg'>© Луч солнца, 2023</div>
                        <div class='text-grey_text text-lg'>ИП Рыбин Д. А.</div>
                        <div class='text-grey_text text-lg'>ОГРНИП: 320723200066545</div>
                    </div>
                </div>
            
            </div>
            <img src="/payment.png" alt="payment" class="absolute bottom-[50px] right-[90px] lg:left-[70px] md:left-[30px]"></img>
        </div>
    )
}