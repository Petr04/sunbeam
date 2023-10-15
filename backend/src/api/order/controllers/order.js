'use strict';

const axios = require('axios')

async function refreshStatus(strapi, order, intervalId) {
  const status = await strapi.service('api::order.payment')
    .getStatus(order.data.invoiceId);

  if (intervalId && (status === 'paid' || status === 'expired')) {
    clearInterval(intervalId);
  }

  await strapi.entityService.update('api::order.order', order.data.id, {
    data: { status }
  });
}

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  async create(ctx) {
    if (!('recaptchaResponseKey' in ctx.request.body.data)) {
      ctx.badRequest('recaptchaResponseKey is required')
      return
    }

    const paykeeperParams = {
      pay_amount: 1000,
      service_name: 'Купить работу',
      client_email: ctx.request.body.email,
      client_phone: ctx.request.body.phoneNumber,
    }

    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify` +
      `?secret=${process.env.RECAPTCHA_SECRET_KEY}` +
      `&response=${ctx.request.body.data.recaptchaResponseKey}`
    )

    if (!response.data.success) {
      ctx.badRequest('Invalid recaptchaResponseKey');
      return;
    }

    const { invoiceUrl, invoiceId } =
      await strapi.service('api::order.payment')
        .getNewPaymentLink(paykeeperParams);

    ctx.request.body.data.invoiceUrl = invoiceUrl;
    ctx.request.body.data.invoiceId = invoiceId;

    const result = await super.create(ctx);

    let intervalId = null;
    intervalId = setInterval(() => refreshStatus(strapi, result, intervalId), 2000);

    return result;
  },
  async findOne(ctx) {
    const refreshStatusRequired = !['', 'false', '0']
      .includes(ctx.request.query?.refreshStatus?.toLowerCase()?.trim());

    if (refreshStatusRequired) {
      const found = await super.findOne(ctx);
      if (!found) {
        ctx.notFound();
        return;
      }
      setTimeout(() => refreshStatus(strapi, found));
      // It needs to be returned to be processed by middleware to be passed
      // to `refreshStatus` prepared. (removing nested `data` and `attributes`)
      return found;
    }

    return await super.findOne(ctx);
  },
}));
