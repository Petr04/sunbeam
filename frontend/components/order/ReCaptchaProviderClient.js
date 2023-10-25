'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

export async function handleReCaptchaVerify(executeRecaptcha) {
  if (!executeRecaptcha) {
    setTimeout(() => handleReCaptchaVerify(), 1000)
    return
  }

  const token = await executeRecaptcha('order')
  return token
}

export default function ReCaptchaProviderClient({ children, ...props }) {
  return (
    <GoogleReCaptchaProvider {...props}>
      {children}
    </GoogleReCaptchaProvider>
  )
}
