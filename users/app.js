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

app.use('/api/admin', require('./routes/admin'))
app.use('/api/auth/jwt', require('./routes/jwt'))
app.use('/api/users', require('./routes/users'))



module.exports = app;
