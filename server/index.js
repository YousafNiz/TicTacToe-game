
const exp = require('constants');
const { Socket } = require('dgram');
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
const Room = require ('./models/room')

var io = require('socket.io')(server);

app.use(express.json());

const DB = 'mongodb+srv://Yousaf:usman123@cluster0.sbecsth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

io.on('connetion', (socket) => {
    console.log('conneted!');
    socket.on('createRoom',async ({nickName}) => {
        console.log(nickName);
        let room = new Room();
        let player = {
            socketID: socket.id,
            nickName,
            playersType: 'x',
        };
        room.players.push(players);
        room.turn = player;
        room = await room.save();
        console.log(room);
        const roomID = room._id
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