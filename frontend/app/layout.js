import './globals.css'
import ReCaptchaProviderClient from '@/components/ReCaptchaProviderClient'

export const metadata = {
  title: 'Луч солнца',
  description: 'Сайт-магазин для продажи картин воспитанников студии',
}

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true}>
      <ReCaptchaProviderClient reCaptchaKey={process.env.RECAPTCHA_SITE_KEY}>
        {children}
      </ReCaptchaProviderClient>
    </html> 
  )
}
