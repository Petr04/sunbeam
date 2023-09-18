'use strict';

async function refreshStatus(strapi, order, intervalId) {
  console.log('ORDER:', order);
  const status = await strapi.service('api::order.payment')
    .getStatus(order.data.invoice_id);

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
    const paykeeperParams = {
      pay_amount: 1000,
      service_name: 'Купить работу',
      client_email: ctx.request.body.email,
      client_phone: ctx.request.body.phone_number,
    }

    try {
      const { invoice_url, invoice_id } =
        await strapi.service('api::order.payment')
          .getNewPaymentLink(paykeeperParams);
    } catch (e) {
      if (e.code === 400) {
        ctx.badRequest(e.message);
        return;
      }

      else if (e.code === 500) {
        ctx.internalServerError(e.message);
        return;
      }
    }

    ctx.request.body.data.invoice_url = invoice_url;
    ctx.request.body.data.invoice_id = invoice_id;

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
