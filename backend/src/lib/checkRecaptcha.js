const axios = require('axios')

module.exports = async function checkRecaptcha (ctx) {
  if (!('recaptchaResponseKey' in ctx.request.body.data)) {
    ctx.badRequest('recaptchaResponseKey is required');
    return;
  }

  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify` +
    `?secret=${process.env.RECAPTCHA_SECRET_KEY}` +
    `&response=${ctx.request.body.data.recaptchaResponseKey}`
  );

  if (!response.data.success) {
    ctx.badRequest('Invalid recaptchaResponseKey');
    return;
  }
}
