import './globals.css'

export const metadata = {
  title: 'Луч солнца',
  description: 'Сайт-магазин для продажи картин воспитанников студии',
}

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true}>
      {children}
    </html> 
  )
}
