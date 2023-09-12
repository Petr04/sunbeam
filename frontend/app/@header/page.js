export default function Header() {
    return (
        <div class="pt-[50px] px-[70px] md  :px-[30px]">
            <nav class="flex justify-between items-center">
                <a href="#"><img src="/logo.png" alt="logo" class="w-[276px]"></img></a>

                <ul class="flex gap-8 wide:gap-12 lg:hidden">
                    <li><a href="" class="font-light text-xl wide:text-2xl">расписание</a></li>
                    <li><a href="" class="font-light text-xl wide:text-2xl">новости</a></li>
                    <li><a href="" class="font-light text-xl wide:text-2xl">наши работы</a></li>
                    <li><a href="" class="font-light text-xl wide:text-2xl">арт-лавка</a></li>
                    <li><a href="" class="font-light text-xl wide:text-2xl">контакты</a></li>
                    <li><a href="" class="font-light text-xl wide:text-2xl">ru</a><img src="/arrow_down.png" alt="ru-en" class="inline mx-1" ></img></li>
                </ul>
                
                <ul id="menu" class="hidden absolute left-6 right-6 top-40 bg-yellow_bg flex-col items-center">
                    <li><a href="" class="block py-4 font-light">расписание</a></li>
                    <li><a href="" class="block py-4 font-light">новости</a></li>
                    <li><a href="" class="block py-4 font-light">наши работы</a></li>
                    <li><a href="" class="block py-4 font-light">арт-лавка</a></li>
                    <li><a href="" class="block py-4 font-light">контакты</a></li>
                </ul>

                <button class="relative h-[20px] w-[30px] hidden lg:block">
                    <span class="absolute left-0 top-0 flex w-[30px] h-[2px] bg-yellow_text"> </span>
                    <span class="absolute left-0 top-[50%] flex w-[30px] h-[2px] bg-yellow_text "> </span>
                    <span class="absolute left-0 bottom-0 flex w-[30px] h-[2px] bg-yellow_text"> </span> 
                </button>

            </nav>
        </div>
    )
}