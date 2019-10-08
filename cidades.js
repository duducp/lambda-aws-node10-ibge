'use strict';

const axios = require('axios');

module.exports.getCidades = async (event, context, callback) => {
  let body = {};
  let status = 200;
  const { sigla } = event.pathParameters;
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios`;

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
