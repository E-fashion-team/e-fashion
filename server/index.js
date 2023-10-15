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

const io = socketIo(server, {
  cors:true,
  origins:["http://127.0.0.1:3000"],
 });
require("./models/model")


// const io = socketIo(server, { cors: { origin: 'http://localhost:3000' } });

//require('./models/model');

const port=5000
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");


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
  // console.log(io)

  socket.on('stream', (data) => {
    socket.broadcast.emit('stream', data);
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', [msg]);
    console.log(msg)
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});


// Proxy HTTP requests
app.all('/*', function (req, res) {
  Proxy.web(req, res, { target: ProxyServer });
});





// torbaga's start point
let counter = 0
io.on('connection', (socket) => {
  console.log('ToRBaGa connected ', counter++);
  
  socket.on('send', (user, message) => {
    console.log('sent from front: ', user, message)
    socket.emit('sendBack', user, message)
    console.log('sent back')
  });
  
  socket.on('disconnect', () => {
    console.log('ToRBaGa disconnected');
  });
});


// torbaga's end point


server.listen(port, () => {
  console.log("backend running in port: ", port)
})



