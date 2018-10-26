const Joi = require('joi');

const create = Joi.object().keys({
  role: Joi.string(),
  resource: Joi.string().required(),
  subject: Joi.string().required().valid("self", "role", "all"),
  claims: Joi.array().items(
    Joi.string().valid("create", "view", "edit", "delete", "list")
  ).required()
}).required()

const update = Joi.object().keys({
  role: Joi.string(),
  resource: Joi.string(),
  subject: Joi.string().valid("self", "role", "all"),
  claims: Joi.array().items(
    Joi.string().valid("create", "view", "edit", "delete", "list")
  )
}).required()

module.exports = {
  create,
  update,
}