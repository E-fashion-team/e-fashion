const express=require('express')
const app=express()
const cors=require("cors")
const http = require('http')
const socketIo = require('socket.io')
const server = http.createServer(app);
const io = socketIo(server,{cors:{origin:"http://localhost:3000"}});
const axios = require('axios')
require("./models/model")

const port=5000
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(express.json())


app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

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


