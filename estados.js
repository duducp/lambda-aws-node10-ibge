'use strict';

const axios = require('axios');

module.exports.getEstados = async (event, context, callback) => {
  const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
  let body = {};
  let status = 200;

  await axios.get(url, { timeout: 2000 })
    .then(response => {
      status = 200;
      body = response.data;
    })
    .catch(error => {
      status = 500;
      body = error;
    });

  const response = {
    statusCode: status,
    body: JSON.stringify(body),
    headers: {
      'X-Request-Id': event.requestContext.requestId,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': false,
    }
  };

  callback(null, response)
};
