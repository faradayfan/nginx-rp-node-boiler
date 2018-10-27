const express = require('express')
const router = express.Router()

const usersRoutes = require('./users')
const rolesRoutes = require('./roles')
const resourcesRoutes = require('./resources')
const roleClaimsRoutes = require('./role-claims')
const jwtRoutes = require('./jwt')

router.use('/users', usersRoutes)
router.use('/roles', rolesRoutes)
router.use('/resources', resourcesRoutes)
router.use('/role-claims', roleClaimsRoutes)
router.use('/auth/jwt', jwtRoutes)
module.exports = router