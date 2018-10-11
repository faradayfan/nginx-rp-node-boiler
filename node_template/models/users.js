const db = require('../db')

const schema = {
    firstName: String,
    lastName: String,
    username: String,
    passHash: String,
    passSalt: String
}

const User = db.model('User', schema)

module.exports = User