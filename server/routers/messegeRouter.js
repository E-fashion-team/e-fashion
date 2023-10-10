const { getAllMessages, getOneMessage, add,deleted,updated}=require("../controllers/messageController")
const express = require('express')
const routerMessages = express.Router()


routerMessages.get('/allMessages',getAllMessages)
routerMessages.get('/:UserId',getOneMessage)

routerMessages.delete('/:UsserId',deleted)
routerMessages.put('/:name',updated)
routerMessages.post('/message/:RoomId',add)
module.exports=routerMessages