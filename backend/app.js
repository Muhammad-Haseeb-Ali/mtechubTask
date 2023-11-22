var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
const SocketHandler = require('./socket');


var app = express();
var socketServer = http.createServer(app)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static assets
app.use("/public",express.static(path.join(__dirname, 'public')));

SocketHandler(socketServer)

module.exports = {app, server: socketServer};
