require("dotenv").config();
const express=require('express')
const app=express()
const cors=require("cors")
const http = require('http')
const socketIo = require('socket.io')
const server = http.createServer(app);
const io = socketIo(server,{cors:{origin:"http://localhost:3000"}});
require("./models/model")

const port=5000
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser");

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
// app.use("/api/room",routerRoom)
app.use("/api/brand",routerBrand)

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (msg) => {
    console.log('hi')
    io.emit('chat message', [msg]);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});




// app.get('/api', (req, res) => {
//     res.json({ message: 'This is your API!' });
//   });

  
  // io.on('connection', (socket) => {
  //   console.log('A user connected');
  
  //   socket.on('disconnect', () => {
  //     console.log('User disconnected');
  //   });
  // })


server.listen(port,()=>{

console.log("backend running in port",port)

})


