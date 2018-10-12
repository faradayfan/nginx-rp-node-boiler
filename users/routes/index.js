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
const UnauthorizedError = require('../errors/UnauthorizedError')

const conf = {
  responseMapper,
  validators
}
const builder = (r) => (model) => (config) => {
  r.get('/', async (req, res) => {
    try {
      res.json(config.responseMapper(await model.find({})))
    } catch (error) {
      console.log(error)
      const errorModel = config.responseMapper(error)
      res.status(errorModel.statusCode).json(errorModel)
    }
  });

  r.post('/', async (req, res) => {
    try {
      const result = Joi.validate(req.body, config.validators.create)
      if (result.error)
        throw new BadRequestError(result.error.details[0].message)
      const user = {
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password_hash: await bcrypt.hash(req.body.password, constants.hash_rounds)
      }

      const userCreationResult = await model.create(user)

      res.json(config.responseMapper(userCreationResult))
    } catch (error) {
      console.log(error)
      const errorModel = config.responseMapper(error)
      res.status(errorModel.statusCode).json(errorModel)
    }
  });

  r.get('/:id', async (req, res) => {
    try {
      const result = await model.findById(req.params.id)
      if (!result)
        throw new NotFoundError('Entity not found')
      res.json(config.responseMapper(result))
    } catch (error) {
      console.log(error)
      const errorModel = config.responseMapper(error)
      res.status(errorModel.statusCode).json(errorModel)
    }
  });

  r.patch('/:id', async (req, res) => {
    try {
      const validatorResult = Joi.validate(req.body, config.validators.update)
      if (validatorResult.error)
        throw new BadRequestError(validatorResult.error.details[0].message)

      const user = await Object.keys(req.body).reduce(async (acc, key) => {
        if (key == "password") {
          acc.password_hash = await bcrypt.hash(req.body[key], constants.hash_rounds)
        } else {
          acc[key] = req.body[key]
        }
        return acc
      }, {})

      console.log(user)

      const result = await model.findByIdAndUpdate(req.params.id, user)

      if (!result)
        throw new NotFoundError('Entity not found')

      res.json(config.responseMapper(await model.findById(req.params.id)))
    } catch (error) {
      console.log(error)
      const errorModel = config.responseMapper(error)
      res.status(errorModel.statusCode).json(errorModel)
    }
  })

  r.delete('/:id', async (req, res) => {
    try {
      const result = await model.findByIdAndRemove(req.params.id)
      if (!result)
        throw new NotFoundError('Entity not found')
      res.json(config.responseMapper(result))
    } catch (error) {
      console.log(error)
      const errorModel = config.responseMapper(error)
      res.status(errorModel.statusCode).json(errorModel)
    }
  })

  r.post('/authenticate', async (req, res) => {
    try {
      const validatorResult = Joi.validate(req.body, config.validators.authenticate)
      if (validatorResult.error)
        throw new BadRequestError(validatorResult.error.details[0].message)

      const result = await model.findOne({ username: req.body.username })
      if (!result)
        throw new UnauthorizedError('Authentication failed')


      const authResult = await bcrypt.compare(req.body.password, result.password_hash)
      if (!authResult)
        throw new UnauthorizedError('Authentication failed')

      res.json(config.responseMapper("Success"))
    } catch (error) {
      console.log(error)
      const errorModel = config.responseMapper(error)
      res.status(errorModel.statusCode).json(errorModel)
    }
  })

  return r
}
module.exports = builder(router)(User)(conf)
