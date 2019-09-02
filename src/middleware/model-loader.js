'use strict';

/**
*This will add model name to the paramof the request body
* @param {request}
* @param {response}
* @param {next}
*/

module.exports = (request, response, next) =>{
  const modelName = request.params.model;
  const Model = require(`../../models/${modelName}/${modelName}`);
  request.model = new Model();
  next();
};
