
const jwt = require('jsonwebtoken')

const User = require('../models/users')
const constants = require('../constants')
const UnauthorizedError = require('../errors/UnauthorizedError')
const responseMapper = require('../mappings/responseMapper')

module.exports = (level) => (req, res, next) => {
  // decode the jwt
  try {
    if (!req.headers.authorization)
      throw new UnauthorizedError("Missing authorization header")
    try {
      req.jwt = jwt.verify(req.headers.authorization, constants.jwt.cert)
    } catch (error) {
      throw new UnauthorizedError("Token verification failed")
    }

    // do some special authorizing based on the type of authorization
    // promises and switch statements can be tricky
    switch (level) {
      case 'admin':
        User.findById(req.jwt.id).then((user) => {
          req.user = user
          if (!req.user.admin)
            throw new UnauthorizedError("User is not authorized to access this resource")
          next()
        }).catch(error => {
          console.log(error)
          const errorModel = responseMapper(error)
          res.status(errorModel.statusCode).json(errorModel)
        })
        break
      case 'user':
        // we just want to make sure the user is accessing their own object
        if (req.params.id != req.jwt.id)
          throw new UnauthorizedError("User is not authorized to access this resource")
        next()
        break
      default:
        next()
    }
  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }

}