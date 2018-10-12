const db = require('../db')

const schema = {
    firstName: String,
    lastName: String,
    username: String,
    password_hash: String,
}

const User = db.model('User', schema)

module.exports = User