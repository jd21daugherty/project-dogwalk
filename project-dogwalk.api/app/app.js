var express = require('express');
var app = express();

var UserController = require('./controllers/user-controller');
app.use('/users', UserController);

module.exports(app);