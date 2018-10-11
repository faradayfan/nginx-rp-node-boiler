const createMapper = require('../helpers/createMapper')

const mapping = {
    result: object => object,
    message: object => object && object.message ? object.message : "OK",
    status: object => object && object.status ? object.status : 200
}



module.exports = createMapper(mapping)