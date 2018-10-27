const express = require('express')
const router = express.Router()

const usersRoutes = require('./users')
const rolesRoutes = require('./roles')
const resourcesRoutes = require('./resources')
const roleClaimsRoutes = require('./role-claims')

router.use('/users', usersRoutes)
router.use('/roles', rolesRoutes)
router.use('/resources', resourcesRoutes)
router.use('/role-claims', roleClaimsRoutes)
module.exports = router