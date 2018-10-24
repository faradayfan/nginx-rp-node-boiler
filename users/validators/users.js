const Joi = require('joi');

const create = Joi.object().keys({
  username: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required()
}).required()

const update = Joi.object().keys({
  username: Joi.string(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  password: Joi.string(),
  email: Joi.string()
}).required()

module.exports = {
  create,
  update
}