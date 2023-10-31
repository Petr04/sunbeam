import { Montserrat } from 'next/font/google'
import Menu from './Menu'
import Footer from './Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Layout({ dark, children, lang }) {
  return (
    <body className={`${montserrat.className} ${dark ? 'dark' : ''} overflow-x-hidden min-w-[300px]`}>
      <div className="bg-background dark:bg-gray-04 text-primary dark:text-gray-02">
        <Menu lang={lang}/>
          {children}
        <Footer lang={lang}/>
      </div>
    </body>
  )
}
