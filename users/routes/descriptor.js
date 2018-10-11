const express = require('express');
const router = express.Router();
const constants = require('../constants')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(constants.service);
});

module.exports = router;
