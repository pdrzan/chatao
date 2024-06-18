var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var chatRouter = require('./routes/chat');
var userRouter = require('./routes/user');
var usersLoggedRouter = require('./routes/usersLogged');
var messageRouter = require('./routes/message');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/chat', chatRouter);
app.use('/user', userRouter);
app.use('/usersLogged', usersLoggedRouter);
app.use('/message', messageRouter);

module.exports = app;
