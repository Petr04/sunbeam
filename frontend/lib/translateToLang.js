const translate = require('google-translate-api-x');

export default async function translateToLang(data, lang) {
  const res = await translate(data, {to: lang} )
  console.log(res)
  return res
}
