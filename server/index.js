
const exp = require('constants');
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);

var io = require('socket.io')(server);

app.use(express.json());

const DB = '';

mongoose.connect(DB).then(() => {
    console.log('connetion successful!');
}).catch((e) => {
    console.log(e);
})

server.listen(port, '0.0.0.0',() => {
    console.log(`Server started and running on port ${port}`)
});