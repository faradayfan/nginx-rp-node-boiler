const Joi = require('joi');

const create = Joi.object().keys({
  name: Joi.string().required(),
  type: Joi.string().required(),
  path: Joi.string().required()
}).required()

const update = Joi.object().keys({
  name: Joi.string(),
  type: Joi.string().valid("api"),
  path: Joi.string()
}).required()

module.exports = {
  create,
  update,
}