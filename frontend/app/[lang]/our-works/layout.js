import { i18n } from '@/i18n.config'

export async function generateMetadata({ params }) {
  const lang = params.lang
 
  if (lang === "en") {
    return {
      title: 'Sun beam',
      description: 'Сайт-магазин для продажи картин воспитанников студии',
    }
  } else if (lang === "ru") {
    return {
      title: 'Луч солнца',
      description: 'Сайт-магазин для продажи картин воспитанников студии',
    }
  }
}

export default function RootLayout({ children, params }) {
 return (
    <html lang={params.lang}>
      {children}
    </html>
  )
}
