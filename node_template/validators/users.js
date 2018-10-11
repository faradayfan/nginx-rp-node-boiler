const Joi = require('joi');

const create = Joi.object().keys({
  username: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required()
}).required()

const update = Joi.object().keys({
  username: Joi.string(),
  firstName: Joi.string(),
  lastName: Joi.string()
}).required()

module.exports = {
  create,
  update
}