export default async function handleReCaptchaVerify(executeRecaptcha) {
  if (!executeRecaptcha) {
    setTimeout(() => handleReCaptchaVerify(), 1000)
    return
  }

  const token = await executeRecaptcha('order')
  return token
}
