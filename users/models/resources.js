const Schema = require('mongoose').Schema
const db = require('../db')

const schema = {
  name: String,
  type: String,
  path: String,
  roleClaims: [{ type: Schema.Types.ObjectId, ref: 'RoleClaims' }]
}

const Resource = db.model('Resource', schema)

module.exports = Resource