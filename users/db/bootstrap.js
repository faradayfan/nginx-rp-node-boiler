const User = require('../models/users')
const Role = require('../models/roles')
const constants = require('../constants')
const bcrypt = require('bcrypt')

const bootstrap_db = async () => {
  const adminRoleCount = await Role.where({ name: constants.db.roles.bootstrap.name }).countDocuments()
  if (adminRoleCount == 0)
    Role.create({
      name: constants.db.roles.bootstrap.name,
    })

  const userCount = await User.where({ admin: true }).countDocuments()
  if (userCount == 0)
    User.create({
      username: constants.db.users.bootstrap.username,
      firstName: constants.db.users.bootstrap.firstName,
      lastName: constants.db.users.bootstrap.lastName,
      admin: constants.db.users.bootstrap.admin,
      password_hash: await bcrypt.hash(constants.db.users.bootstrap.password, constants.hash_rounds)
    })
}

bootstrap_db()
