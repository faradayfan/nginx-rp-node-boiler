const Joi = require('joi');

const create = Joi.object().keys({
  name: Joi.string().required(),
  roleClaims: Joi.array().items(Joi.string()).required(),
}).required()

const update = Joi.object().keys({
  name: Joi.string(),
  roleClaims: Joi.array().items(Joi.string()),
}).required()

module.exports = {
  create,
  update,
}