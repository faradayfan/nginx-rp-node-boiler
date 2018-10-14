const User = require('../models/users')
const constants = require('../constants')
const bcrypt = require('bcrypt')

const bootstrap_db = async () => {
  const userCount = await User.where({ admin: true }).countDocuments()
  if (userCount == 0)
    User.create({
      username: 'admin',
      firstName: 'admin',
      lastName: 'admin',
      admin: true,
      password_hash: await bcrypt.hash('password1234', constants.hash_rounds)
    })
}

bootstrap_db()
