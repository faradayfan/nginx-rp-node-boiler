const db = require('../db')

const schema = {
    firstName: String,
    lastName: String,
    username: String,
    password_hash: { type: String, select: false },
}

const User = db.model('User', schema)

module.exports = User