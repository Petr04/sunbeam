import ky from 'ky-universal'

export default ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_API_TOKEN,
  },
})
