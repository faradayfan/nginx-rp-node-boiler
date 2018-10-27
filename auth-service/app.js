var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./db/bootstrap')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('./services/jwtParser'))

app.use('/api', require('./routes'))



module.exports = app;
