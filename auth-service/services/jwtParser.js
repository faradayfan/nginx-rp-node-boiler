
const jwt = require('jsonwebtoken')
const wildcard = require('wildcard')

const User = require('../models/users')
const constants = require('../constants')
const UnauthorizedError = require('../errors/UnauthorizedError')
const responseMapper = require('../mappings/responseMapper')

module.exports = (req, res, next) => {
  // decode the jwt
  try {
    if (req.headers.authorization) {
      try {
        req.jwt = jwt.verify(req.headers.authorization, constants.jwt.cert)
      } catch (error) {
        throw new UnauthorizedError("Token verification failed")
      }
    }
    next()
  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }

}