const Joi = require('joi');

const authenticate = Joi.object().keys({
  username: Joi.string(),
  password: Joi.string()
})

module.exports = {
  authenticate
}