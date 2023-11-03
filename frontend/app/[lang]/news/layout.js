import { i18n } from '@/i18n.config'

// export async function generateStaticParams() {
//   return i18n.locales.map(locale => ({ lang: locale }))
// }

export const metadata = {
  title: 'Луч солнца',
  description: 'Сайт-магазин для продажи картин воспитанников студии',
}

export default function RootLayout({ children, params }) {
 return (
    <html lang={params.lang}>
      {children}
    </html>
  )
}
