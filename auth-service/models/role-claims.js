const Schema = require('mongoose').Schema;
const db = require('../db')

const schema = {
  resource: { type: Schema.Types.ObjectId, ref: 'Resource' },
  claims: [String],
  subject: String
}

const RoleClaims = db.model('RoleClaims', schema)

module.exports = RoleClaims