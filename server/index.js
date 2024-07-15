
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
        try{
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
        const roomId = room._id.toString();

        socket.join(roomId);
        io.to(roomId).emit('Roomiscreated', room)
        } catch (e) {
            console.log(e);
        }
        
    });

    socket.on('joinRoom',async ({nickName, roomId}) =>{
        try{
            if(!roomId.match(/^[0-9a-fA-F]{24}$/)) {
                socket.emit('errorOccurred', 'Please Enter valid room ID');
                return;
            }
            let room = await Room.findById(roomId);
            if(room.isJoin) {
                let player = {
                    nickName,
                    socketID: socket.id,
                    playersType: 'O'
                }
                socket.join(roomId);
                room.players.push(player);
                room = await room.save();
            } else {
                socket.emit(
                    'errorOccurred','The game is in progress, try again later'
                );
            }
        } catch (e){
    console.log(e)}
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