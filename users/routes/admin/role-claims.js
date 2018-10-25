const express = require('express')
const Joi = require('joi')
const router = express.Router()

const RoleClaim = require('../../models/role-claims')
const validators = require('../../validators/admin/role-claims')
const responseMapper = require('../../mappings/responseMapper')
const NotFoundError = require('../../errors/NotFoundError')
const BadRequestError = require('../../errors/BadRequestError')



router.get('/', async (req, res) => {
  try {
    const rc = await RoleClaim.find({})
      .populate('role')
      .populate('resource')
      .exec()
    res.json(responseMapper(rc))
  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }
});

router.post('/', async (req, res) => {
  try {
    const result = Joi.validate(req.body, validators.create)
    if (result.error)
      throw new BadRequestError(result.error.details[0].message)

    const roleClaimsCreationResult = await RoleClaim.create(req.body)

    res.json(responseMapper(await RoleClaim.findById(roleClaimsCreationResult.id)))
  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await RoleClaim.findById(req.params.id).populate('role')
      .populate('resource')
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

router.patch('/:id', async (req, res) => {
  try {
    const validatorResult = Joi.validate(req.body, validators.update)
    if (validatorResult.error)
      throw new BadRequestError(validatorResult.error.details[0].message)

    const result = await RoleClaim.findByIdAndUpdate(req.params.id, req.body)

    if (!result)
      throw new NotFoundError('Entity not found')

    res.json(responseMapper(await RoleClaim.findById(req.params.id)))
  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const result = await RoleClaim.findByIdAndRemove(req.params.id)
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
