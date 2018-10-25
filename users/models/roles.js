const db = require('../db')

const schema = {
  name: String
}

const Role = db.model('Role', schema)

module.exports = Role