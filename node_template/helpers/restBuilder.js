const NotFoundError = require('../errors/NotFoundError')
const BadRequestError = require('../errors/BadRequestError')
const Joi = require('joi')



module.exports = (router) => (model) => (config) => {
    router.get('/', async (req, res) => {
        try {
            res.json(config.mapper(await model.find({})))
        } catch (error) {
            const errorModel = config.errorMapper(error)
            res.status(errorModel.status).json(errorModel)
        }
    });

    router.post('/', async (req, res) => {
        try {
            const result = Joi.validate(req.body, config.validators.create)
            if (result.error)
                throw new BadRequestError(result.error.details[0].message)

            res.json(config.mapper(await model.create(req.body)))
        } catch (error) {
            const errorModel = config.errorMapper(error)
            res.status(errorModel.status).json(errorModel)
        }
    });

    router.get('/:id', async (req, res) => {
        try {
            const result = await model.findById(req.params.id)
            if (!result)
                throw new NotFoundError('Entity not found')
            res.json(config.mapper(result))
        } catch (error) {
            const errorModel = config.errorMapper(error)
            res.status(errorModel.status).json(errorModel)
        }
    });

    router.patch('/:id', async (req, res) => {
        try {
            const validatorResult = Joi.validate(req.body, config.validators.update)
            if (validatorResult.error)
                throw new BadRequestError(validatorResult.error.details[0].message)
            const result = await model.findByIdAndUpdate(req.params.id, req.body)
            if (!result)
                throw new NotFoundError('Entity not found')
            res.json(config.mapper(await model.findById(req.params.id)))
        } catch (error) {
            const errorModel = config.errorMapper(error)
            res.status(errorModel.status).json(errorModel)
        }
    })

    router.delete('/:id', async (req, res) => {
        try {
            const result = await model.findByIdAndRemove(req.params.id)
            if (!result)
                throw new NotFoundError('Entity not found')
            res.json(config.mapper(result))
        } catch (error) {
            const errorModel = config.errorMapper(error)
            res.status(errorModel.status).json(errorModel)
        }
    })
    return router
}