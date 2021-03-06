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
const resourceAuthorizer = require('../services/resourceAuthorizer')

router.get('/', resourceAuthorizer('list', ['all']), async (req, res) => {
  try {
    const users = await User.find({})
      .populate({
        path: "roles",
        populate: {
          path: "roleClaims",
          select: ["-role"],
          populate: {
            path: "resource",
            select: ["-roleClaims"]
          }
        }
      })
      .exec()

    res.json(responseMapper(users))
  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }
});

router.post('/', resourceAuthorizer('create', ['self', 'all']), async (req, res) => {
  try {
    const result = Joi.validate(req.body, validators.create)
    if (result.error)
      throw new BadRequestError(result.error.details[0].message)

    const user = Object.keys(req.body)
      .filter(v => v != "password") // remove password because that will be handled in a special way
      .reduce((acc, key) => {
        acc[key] = req.body[key]
        return acc
      }, {})

    if (req.body.password)
      user.password_hash = await bcrypt.hash(req.body.password, constants.hash_rounds)

    console.log(user)

    const userCreationResult = await User.create(user)

    res.json(responseMapper(await User.findById(userCreationResult.id)))
  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }
});

router.get('/:id', resourceAuthorizer('view', ['all', 'self']), async (req, res) => {
  try {
    const result = await User.findById(req.params.id)
      .populate({
        path: "roles",
        populate: {
          path: "roleClaims",
          select: ["-role"],
          populate: {
            path: "resource",
            select: ["-roleClaims"]
          }
        }
      })
      .exec()
    if (!result)
      throw new NotFoundError('Entity not found')
    res.json(responseMapper(result))
  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }
});

router.patch('/:id', resourceAuthorizer('edit', ['all', 'self']), async (req, res) => {
  try {
    const validatorResult = Joi.validate(req.body, validators.update)
    if (validatorResult.error)
      throw new BadRequestError(validatorResult.error.details[0].message)

    const user = Object.keys(req.body)
      .filter(v => v != "password") // remove password because that will be handled in a special way
      .reduce((acc, key) => {
        acc[key] = req.body[key]
        return acc
      }, {})

    if (req.body.password)
      user.password_hash = await bcrypt.hash(req.body.password, constants.hash_rounds)

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

router.delete('/:id', resourceAuthorizer('delete', ['all']), async (req, res) => {
  try {
    const result = await User.findByIdAndRemove(req.params.id)
    if (!result)
      throw new NotFoundError('Entity not found')
    res.json(responseMapper(result))
  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }
})


module.exports = router
