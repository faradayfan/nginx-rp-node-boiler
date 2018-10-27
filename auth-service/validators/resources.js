const Joi = require('joi');

const create = Joi.object().keys({
  name: Joi.string().required(),
  type: Joi.string().required(),
  roleClaims: Joi.array().items(Joi.string()),
  path: Joi.string().required()
}).required()

const update = Joi.object().keys({
  name: Joi.string(),
  type: Joi.string().valid("api"),
  roleClaims: Joi.array().items(Joi.string()),
  path: Joi.string()
}).required()

module.exports = {
  create,
  update,
}