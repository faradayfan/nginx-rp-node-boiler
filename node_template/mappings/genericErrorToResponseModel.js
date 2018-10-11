const createMapper = require('../helpers/createMapper')

const errorMappingModel = {
    error: error => error.name,
    message: error => error.message,
    status: error => error.statusCode ? error.statusCode : 500
}



module.exports = createMapper(errorMappingModel)