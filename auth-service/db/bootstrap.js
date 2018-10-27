const User = require('../models/users')
const Role = require('../models/roles')
const Resource = require('../models/resources')
const RoleClaim = require('../models/role-claims')
const constants = require('../constants')
const bcrypt = require('bcrypt')

const bootstrap_db = async () => {
  let resource
  let role
  let roleClaim
  let user
  try {
    const adminResourceCount = await Resource.where({ name: constants.db.resources.bootstrap.name }).countDocuments()
    if (adminResourceCount == 0)
      resource = await Resource.create({
        ...constants.db.resources.bootstrap,
      })

    const adminRoleClaimCount = await RoleClaim.find({}).countDocuments()
    if (adminRoleClaimCount == 0)
      roleClaim = await RoleClaim.create({
        resource: resource._id,
        ...constants.db.roleClaims.bootstrap
      })

    const adminRoleCount = await Role.where({ name: constants.db.roles.bootstrap.name }).countDocuments()
    if (adminRoleCount == 0)
      role = await Role.create({
        ...constants.db.roles.bootstrap,
        roleClaims: [roleClaim._id]
      })

    const userCount = await User.where({ admin: true }).countDocuments()
    if (userCount == 0)
      user = await User.create({
        username: constants.db.users.bootstrap.username,
        firstName: constants.db.users.bootstrap.firstName,
        lastName: constants.db.users.bootstrap.lastName,
        roles: [role._id],
        password_hash: await bcrypt.hash(constants.db.users.bootstrap.password, constants.hash_rounds)
      })

    console.log("resource", resource)
    console.log("role", role)
    console.log("roleClaim", roleClaim)
    console.log("user", user)

  } catch (error) {
    console.log(error)
  }


}

bootstrap_db()
