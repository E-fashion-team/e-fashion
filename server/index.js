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
  console.log('A user connected');

  socket.on('stream', (data) => {
    socket.broadcast.emit('stream', data);
  });

  socket.on('chat message', (msg) => {
    console.log('hi')
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

// API routes
const routerMessages = require('./routers/messegeRouter.js');
const routerUsers = require('./routers/userRouter.js');
const routerProduct = require('./routers/productRouter.js');
const routerBrand = require('./routers/brandRouter.js');
const routerRoom = require('./routers/roomRouter.js');

app.use('/api/message', routerMessages);
app.use('/api/product', routerProduct);
app.use('/api/user', routerUsers);
app.use('/api/brand', routerBrand);
// app.use('/api/room', routerRoom);

server.listen(port, () => {
  console.log('Backend is running on port', port);
});
