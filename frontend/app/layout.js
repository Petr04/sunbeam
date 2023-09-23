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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`zoom-1 mx-auto overflow-x-hidden ${montserrat.className}`}>
        <Menu />
        {children}
        <Footer />  
      </body>
    </html> 
  )
}
