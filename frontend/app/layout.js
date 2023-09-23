import './globals.css'
import { Montserrat } from 'next/font/google'
import Menu from './_components/Menu'
import Footer from './_components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Луч солнца',
  description: 'Сайт-магазин для продажи картин воспитанников студии',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`overflow-x-hidden ${montserrat.className} text-primary bg-background`}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html> 
  )
}
