const express = require('express')
const router = express.Router()

const constants = require('../../constants')
const User = require('../../models/users')
const validators = require('../../validators/users')
const responseMapper = require('../../mappings/responseMapper')
const NotFoundError = require('../../errors/NotFoundError')
const BadRequestError = require('../../errors/BadRequestError')
const authorizer = require('../../services/authorizer')

const usersRoutes = require('./users')


router.use(authorizer('admin'))
router.use('/users', usersRoutes)

module.exports = router