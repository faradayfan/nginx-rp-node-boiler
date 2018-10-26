const Schema = require('mongoose').Schema
const db = require('../db')

const schema = {
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    admin: { type: Boolean, default: false },
    password_hash: { type: String, select: false },
    active: { type: Boolean, default: true },
    roles: [{ type: Schema.Types.ObjectId, ref: 'Role' }]
}

const User = db.model('User', schema)

module.exports = User