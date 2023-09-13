import './globals.css'

export const metadata = {
  title: 'Луч солнца',
  description: 'Сайт-магазин для продажи картин воспитанников студии',
}

export default function RootLayout({ children , header, footer }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="./global.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet"/>
      </head>
      <body>
        {header}
        {/* {children} */}
        {footer}
      </body>
    </html> 
  )
}

