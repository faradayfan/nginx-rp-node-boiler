const Joi = require('joi');

const create = Joi.object().keys({
  role: Joi.string().required(),
  resource: Joi.string().required(),
  claims: Joi.array().items(
    Joi.string().valid("create", "view", "edit", "delete", "list")
  ).required()
}).required()

const update = Joi.object().keys({
  role: Joi.string(),
  resource: Joi.string(),
  claims: Joi.array().items(
    Joi.string().valid("create", "view", "edit", "delete", "list")
  )
}).required()

module.exports = {
  create,
  update,
}