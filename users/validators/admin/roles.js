const Joi = require('joi');

const create = Joi.object().keys({
  name: Joi.string().required()
}).required()

const update = Joi.object().keys({
  name: Joi.string(),
}).required()

module.exports = {
  create,
  update,
}