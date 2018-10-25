const express = require('express')
const router = express.Router()
const authorizer = require('../../services/authorizer')

const usersRoutes = require('./users')
const rolesRoutes = require('./roles')

router.use(authorizer('admin'))
router.use('/users', usersRoutes)
router.use('/roles', rolesRoutes)
module.exports = router