export default {
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_API_TOKEN,
  },
}