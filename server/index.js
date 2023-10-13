const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const cookieParser = require('cookie-parser'); 
const Proxy = require('http-proxy').createProxyServer();
const path = require('path');
const config = require(path.join(__dirname, '../config/global.json'));
const server = http.createServer(app);

const io = socketIo(server, { cors: { origin: 'http://localhost:3000' } });

require('./models/model');


const axios = require('axios


const port=5000
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");


app.use(express.json())


app.use(bodyparser.urlencoded({ extended: true }));
const ProxyServer = 'http://localhost:' + config.Proxy.settings.port;


app.use(express.json());
app.use(cors());


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Socket.IO configuration
const oi = socketIo(config.Server.settings.socket, {
  cors: {
    origin: 'http://localhost:3000',
  },
  // Additional socket.io configuration here
});

oi.on('connection', (socket) => {

// app.use(cors())
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

io.on('connection', (socket) => {

  console.log('A user connected');

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


// Proxy HTTP requests
app.all('/*', function (req, res) {
  Proxy.web(req, res, { target: ProxyServer });
});




server.listen(port, () => {
  console.log('Backend is running on port', port);

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



// app.get('/api', (req, res) => {
//     res.json({ message: 'This is your API!' });
//   });

  
  // io.on('connection', (socket) => {
  //   console.log('A user connected');
  
  //   socket.on('disconnect', () => {
  //     console.log('User disconnected');
  //   });
  // })


server.listen(port, () => {
  console.log("backend running in port: ", port)
})



