const express = require('express')
const Joi = require('joi')
const router = express.Router()

const Role = require('../../models/roles')
const validators = require('../../validators/admin/roles')
const responseMapper = require('../../mappings/responseMapper')
const NotFoundError = require('../../errors/NotFoundError')
const BadRequestError = require('../../errors/BadRequestError')
const resourceAuthorizer = require('../../services/resourceAuthorizer')



router.get('/', resourceAuthorizer('list', ['all']), async (req, res) => {
  try {

    const roles = await Role.find({})
      .populate({
        path: "roleClaims",
        populate: {
          path: "resource",
          select: ["-roleClaims"]
        }
      })
      .exec()
    res.json(responseMapper(roles))
  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }
});

router.post('/', resourceAuthorizer('create', ['all']), async (req, res) => {
  try {
    const result = Joi.validate(req.body, validators.create)
    if (result.error)
      throw new BadRequestError(result.error.details[0].message)

    const roleCreationResult = await Role.create(req.body)

    res.json(responseMapper(await Role.findById(roleCreationResult.id)))
  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }
});

router.get('/:id', resourceAuthorizer('view', ['all']), async (req, res) => {
  try {
    const result = await Role.findById(req.params.id)
      .populate({
        path: "roleClaims",
        select: ["-role"],
        populate: {
          path: "resource",
          select: ["-roleClaims"]
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

router.patch('/:id', resourceAuthorizer('edit', ['all']), async (req, res) => {
  try {
    const validatorResult = Joi.validate(req.body, validators.update)
    if (validatorResult.error)
      throw new BadRequestError(validatorResult.error.details[0].message)

    const result = await Role.findByIdAndUpdate(req.params.id, req.body)

    if (!result)
      throw new NotFoundError('Entity not found')

    res.json(responseMapper(await Role.findById(req.params.id)))
  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }
})

router.delete('/:id', resourceAuthorizer('delete', ['all']), async (req, res) => {
  try {
    const result = await Role.findByIdAndRemove(req.params.id)
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
