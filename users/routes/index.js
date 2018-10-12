const express = require('express')
const router = express.Router()
const User = require('../models/users')
const validators = require('../validators/users')
const responseMapper = require('../mappings/responseMapper')
const restBuilder = require('../helpers/restBuilder')

const config = {
  responseMapper,
  validators
}

module.exports = restBuilder(router)(User)(config)
