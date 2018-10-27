const Schema = require('mongoose').Schema
const db = require('../db')

const schema = {
  name: String,
  roleClaims: [{ type: Schema.Types.ObjectId, ref: 'RoleClaims' }]
}

const Role = db.model('Role', schema)

module.exports = Role