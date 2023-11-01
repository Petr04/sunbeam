import './globals.css'
import ReCaptchaProviderClient from '@/components/ReCaptchaProviderClient'
import { i18n } from '@/i18n.config'

export const metadata = {
  title: 'Луч солнца',
  description: 'Сайт-магазин для продажи картин воспитанников студии',
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({ children, params }) {
  return (
    <html suppressHydrationWarning={true} lang={params.lang}>
      <ReCaptchaProviderClient reCaptchaKey={process.env.RECAPTCHA_SITE_KEY}>
        {children}
      </ReCaptchaProviderClient>
    </html> 
  )
}
