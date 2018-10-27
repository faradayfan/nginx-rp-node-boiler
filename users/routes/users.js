const express = require('express')
const Joi = require('joi')
const bcrypt = require('bcrypt')
const router = express.Router()

const constants = require('../constants')
const User = require('../models/users')
const validators = require('../validators/users')
const responseMapper = require('../mappings/responseMapper')
const NotFoundError = require('../errors/NotFoundError')
const BadRequestError = require('../errors/BadRequestError')

router.post('/', async (req, res) => {
  try {
    const result = Joi.validate(req.body, validators.create)
    if (result.error)
      throw new BadRequestError(result.error.details[0].message)
    const user = {
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password_hash: await bcrypt.hash(req.body.password, constants.hash_rounds)
    }

    const userCreationResult = await User.create(user)

    res.json(responseMapper(await User.findById(userCreationResult.id)))
  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await User.findById(req.params.id)
    if (!result)
      throw new NotFoundError('Entity not found')
    res.json(responseMapper(result))
  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const validatorResult = Joi.validate(req.body, validators.update)
    if (validatorResult.error)
      throw new BadRequestError(validatorResult.error.details[0].message)

    let starting = {}
    if (req.body.password) {
      starting.password_hash = await bcrypt.hash(req.body.password, constants.hash_rounds)
    }

    const user = await Object.keys(req.body).filter(k => k != "password").reduce((acc, key) => {
      acc[key] = req.body[key]

      return acc
    }, starting)

    console.log(user)

    const result = await User.findByIdAndUpdate(req.params.id, user)

    if (!result)
      throw new NotFoundError('Entity not found')

    res.json(responseMapper(await User.findById(req.params.id)))
  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }
})

module.exports = router
