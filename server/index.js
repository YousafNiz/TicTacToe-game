
const exp = require('constants');
const { Socket } = require('dgram');
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);

var io = require('socket.io')(server);

app.use(express.json());

const DB = 'mongodb+srv://Yousaf:usman123@cluster0.sbecsth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

io.on('connetion', (socket) => {
    console.log('conneted!');
    socket.on('createRoom',({nickName}) => {
        console.log(nickName);
        console.log(socket.id);
    });
});

mongoose.connect(DB).then(() => {
    console.log('connetion successful!');
}).catch((e) => {
    console.log(e);
})

server.listen(port, '0.0.0.0',() => {
    console.log(`Server started and running on port ${port}`)
});