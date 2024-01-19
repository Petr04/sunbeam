import Layout from '@/components/Layout'
import ky from '@/kyUniversal'
import { getDictionary } from '@/lib/dictionary'

export const revalidate = 2 // change in prod

export default async function Contacts( {params: {lang}} ) {

  let news = await ky.get('api/news?populate[0]=image&locale=ru').json()
  if (lang === "en") {
    news = await ky.get('api/news?populate[0]=image&locale=en').json()
  }

  const dict = await getDictionary(lang)

  return (
    <Layout lang={lang}>
      contacts
    </Layout>
  )
}
