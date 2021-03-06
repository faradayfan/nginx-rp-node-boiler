const Joi = require('joi');

const create = Joi.object().keys({
  active: Joi.boolean().required(),
  username: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required(),
  roles: Joi.array().items(Joi.string()),
}).required()

const update = Joi.object().keys({
  active: Joi.boolean(),
  username: Joi.string(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  password: Joi.string(),
  email: Joi.string(),
  roles: Joi.array().items(Joi.string()),
}).required()

module.exports = {
  create,
  update,
}