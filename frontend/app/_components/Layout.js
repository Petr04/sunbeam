import { Montserrat } from 'next/font/google'
import Menu from './Menu'
import Footer from './Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Layout({ dark, children }) {
  return (
    <body className={`${montserrat.className} ${dark ? 'dark' : ''} overflow-x-hidden`}>
      <div className="bg-background dark:bg-gray-04 text-primary dark:text-gray-02">
        <Menu />
        {children}
        <Footer />
      </div>
    </body>
  )
}
