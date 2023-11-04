import Layout from '@/components/Layout'

export default function PageNew( {title, lang} ) {

    return (
        <Layout lang={lang}>
            <p>{title}</p>
        </Layout>
    )
}