const Joi = require('joi');

const create = Joi.object().keys({
  username: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string().required()
}).required()

const update = Joi.object().keys({
  username: Joi.string(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  password: Joi.string()
}).required()

const authenticate = Joi.object().keys({
  username: Joi.string(),
  password: Joi.string()
})

module.exports = {
  create,
  update,
  authenticate
}