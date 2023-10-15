// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { ExpressPeerServer } = require('peer');
const cors = require('cors');
const app = express();
const port=5000
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");

const axios = require('axios')
app.use(cors()); // Add cors middleware early

const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: 'http://localhost:3000' } });


const peerServer = ExpressPeerServer(server, {
  path: '/ws://localhost:5000', // Your peerjs path
  allow_discovery: true,
});
require('./models/model');
app.use('/ws://localhost:5000', peerServer);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// server.js
io.on('connection', (socket) => {
  console.log('A selim connected.');

  
  
  // Signaling for WebRTC
  socket.on('signal', (data) => {
    console.log('Sign');
    // Broadcast the signal to the appropriate target
    socket.to(data.target).emit('signal',data);
  });
  
  socket.on('disconnect', () => {
    // Inform other connected clients about the disconnectio
    console.log(`User with role  disconnected.`);
  });
});
io.on('connection', (socket) => {
  
  console.log('A user zeineb');
  
  socket.on('stream', (data) => {
    socket.broadcast.emit('stream', data);
  });
  
  socket.on('chat message', (msg) => {
    io.emit('chat message', [msg]);
  });
  
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
// torbaga's start point

var data = []

const handleSend = async (user, message) => {
  try {
    const response = await axios.post('http://127.0.0.1:5000/api/message/message/1', {message: message, userId: user.id})
    console.log("this is data: ", response.data)
  } catch (err) {
    console.log(err)
  }
}

const handleFetch = async () => {
  try {
    var response = await axios.get('http://127.0.0.1:5000/api/room/messageByRoom/1')
    data = response.data[0].Messages
  } catch (err) {
    console.log(err)
  }
}

io.on('connection', (socket) => {
  console.log('ToRBaGa connected');
  
  socket.on('chatRoomConnection', (user, message) => {
    console.log('this is user: ', user)
    handleSend(user, message)
  });
  
  socket.on('sendChat', () => {
    handleFetch()
    io.emit('fetchChat', data)
  });
  
  socket.on('disconnect', () => {
    console.log('ToRBaGa disconnected');
  });
});

// torbaga's end point

const routerMessages=require("./routers/messegeRouter.js")
const routerUsers=require("./routers/userRouter.js")
const routerProduct=require("./routers/productRouter.js")
const routerBrand=require("./routers/brandRouter.js")
const routerRoom=require("./routers/roomRouter.js")
app.use("/api/message",routerMessages)
app.use("/api/product",routerProduct)
app.use("/api/user",routerUsers)
app.use("/api/room",routerRoom)
app.use("/api/brand",routerBrand)

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});
















