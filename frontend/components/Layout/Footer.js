import LanguagePicker from '@/components/LanguagePicker'
import { getDictionary } from '@/lib/dictionary'

export default async function Footer( {lang} ) {

  const {footer} = await getDictionary(lang)

  return (
    <div className="relative mt-[195px] h-[288px] lg:h-[470px] md:h-[470px] bg-gray-04 w-[100%] rounded-t-[3rem]">
      <div className="flex flex-col gap-[44px] absolute left-[90px] top-[3rem] lg:left-[70px] md:left-[30px]">
        <div className="flex flex-col items-start gap-[20px]">
          <img src={footer.logo_src} alt="logo" className=""></img>
        </div>
        <div className="
          grid grid-cols-2 gap-20 
          lg:grid-cols-1 lg:gap-2 
          md:grid-cols-1 md:gap-2
          ">
          <div className="flex-col items-start">
            <div className='text-gray-02 text-lg font-semibold'>{footer.contacts}</div>
            <div className='text-gray-02 text-lg'>{footer.vk}</div>
            <div className='text-gray-02 text-lg'>{footer.number}</div>
          </div>
          <div className="flex-col items-start">
            <div className='text-gray-02 text-lg'>{footer.company_name}</div>
            <div className='text-gray-02 text-lg'>{footer.owner_name}</div>
            <div className='text-gray-02 text-lg'>{footer.company_code}</div>
          </div>
        </div>
      
      </div>
      <img 
        src="/info_footer.svg" alt="payment" 
        className="
          absolute bottom-[80px] right-[90px] 
          lg:left-[70px] 
          md:left-[30px]
          ssm:w-[15rem]"
          />
    </div>
  )
}
