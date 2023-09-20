'use strict';

const axiosDefault = require('axios');

const base64 = btoa(`${process.env.PAYKEEPER_USERNAME}:${process.env.PAYKEEPER_PASSWORD}`);

const axios = axiosDefault.create({
  baseURL: process.env.PAYKEEPER_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + base64,
  },
})

async function getToken() {
  const response = await axios.get('/info/settings/token');

  const isDataObject = typeof response.data == 'object';
  const isTokenInData = isDataObject && 'token' in response.data;

  if (!isTokenInData)
    return { error: true };

  return response.data.token;
}

/*
props: {
  payAmount: number (12.34 is 12.34 rubles)
  serviceName: string,
  clientEmail: string,
  clientPhone: string,
}
*/
async function getInvoice(token, props) {
  const data = (await axios.post('/change/invoice/preview', {
    token: token,
    ...props
  })).data;

  if (typeof data != 'object' || data?.result === 'fail') {
    return { error: true, message: data?.msg };
  }

  return {
    invoice_url: data.invoice_url,
    invoice_id: data.invoice_id,
  };
}

/**
 * payment service
 */

module.exports = () => ({
  getNewPaymentLink: async (props) => {
    const token = await getToken();
    if (token?.error) {
      const error = new Error('Ошибка при получении токена');
      error.code = 500;
      throw error;
    }
    const invoice = await getInvoice(token, props);
    if (invoice?.error) {
      const error = new Error(invoice.message);
      error.code = 400;
      throw new error;
    }
    return invoice;
  },
  getStatus: async (invoice_id) => {
    const response = await axios.get(`/info/invoice/byid?id=${invoice_id}`);
    return response.data.status;
  },
});
