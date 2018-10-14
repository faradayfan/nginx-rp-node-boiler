const express = require('express')
const Joi = require('joi')
const bcrypt = require('bcrypt')
const router = express.Router()
const jwt = require('jsonwebtoken')

const authorizer = require('../services/authorizer')
const constants = require('../constants')
const User = require('../models/users')
const validators = require('../validators/users')
const responseMapper = require('../mappings/responseMapper')
const BadRequestError = require('../errors/BadRequestError')
const UnauthorizedError = require('../errors/UnauthorizedError')

router.post('/authenticate', async (req, res) => {
  try {
    const validatorResult = Joi.validate(req.body, validators.authenticate)
    if (validatorResult.error)
      throw new BadRequestError(validatorResult.error.details[0].message)

    const user = await User.findOne({ username: req.body.username }).select('password_hash')
    if (!user)
      throw new UnauthorizedError('Authentication failed')


    const authResult = await bcrypt.compare(req.body.password, user.password_hash)
    if (!authResult)
      throw new UnauthorizedError('Authentication failed')
    res.json(responseMapper({
      jwt: jwt.sign({ id: user.id }, constants.jwt.cert,
        { expiresIn: constants.jwt.expire }),
      message: "Success",
    }))
  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }
})

router.get('/authorize', authorizer(), async (req, res) => {
  try {

    const user = await User.findById(req.jwt.id)
    res.json(responseMapper({ jwt_decoded: req.jwt, user }))
  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }
})

router.get('/refresh', authorizer(), async (req, res) => {
  try {

    res.json(responseMapper({
      jwt: jwt.sign({ id: req.jwt.id }, constants.jwt.cert,
        { expiresIn: constants.jwt.expire }),
      message: "Success",
    }))

  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }
})

module.exports = router