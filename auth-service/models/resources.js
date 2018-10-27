const Schema = require('mongoose').Schema
const db = require('../db')

const schema = {
  name: String,
  type: String,
  path: String,
}

const Resource = db.model('Resource', schema)

module.exports = Resource