const express = require('express')
const Joi = require('joi')
const router = express.Router()

const Resource = require('../../models/resources')
const validators = require('../../validators/admin/resources')
const responseMapper = require('../../mappings/responseMapper')
const NotFoundError = require('../../errors/NotFoundError')
const BadRequestError = require('../../errors/BadRequestError')



router.get('/', async (req, res) => {
  try {
    const resources = await Resource.find({})
      .populate("roleClaims")
      .exec()
    res.json(responseMapper(resources))
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

    const resourceCreationResult = await Resource.create(req.body)

    res.json(responseMapper(await Resource.findById(resourceCreationResult.id)))
  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await Resource.findById(req.params.id)
      .populate("roleClaims")
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

    const result = await Resource.findByIdAndUpdate(req.params.id, req.body)

    if (!result)
      throw new NotFoundError('Entity not found')

    res.json(responseMapper(await Resource.findById(req.params.id)))
  } catch (error) {
    console.log(error)
    const errorModel = responseMapper(error)
    res.status(errorModel.statusCode).json(errorModel)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const result = await Resource.findByIdAndRemove(req.params.id)
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
