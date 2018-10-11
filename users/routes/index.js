const express = require('express');
const router = express.Router();
const User = require('../models/users')
const validators = require('../validators/users')
const errorToResponseModel = require('../mappings/genericErrorToResponseModel')
const responseModel = require('../mappings/responseModel')
const restBuilder = require('../helpers/restBuilder')

const config = {
  mapper: responseModel,
  errorMapper: errorToResponseModel,
  validators
}

module.exports = restBuilder(router)(User)(config);
