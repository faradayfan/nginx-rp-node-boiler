const _ = require('lodash')

module.exports = (obj) => {
    if (obj.constructor.name.toLowerCase().includes('error')) {
        return {
            error: obj.constructor.name,
            message: obj.message.replace(/\"/g, "'"), // for stupid crap
            statusCode: obj.statusCode ? obj.statusCode : 500
        }
    } else {
        return {
            result: Array.isArray(obj) ? obj : _.omit(obj, ['message', 'statusCode']),
            message: obj.message ? obj.message : "OK",
            statusCode: obj.statusCode ? obj.statusCode : 200
        }
    }
}