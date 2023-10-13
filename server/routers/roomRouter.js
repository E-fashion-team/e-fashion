const { getAllRooms, getRooms, getAllRoomsForOneUser,getAllMessageForOneRoom,add,addRoomsUser,deleted,updateRoom}=require("../controllers/roomController")
const express = require('express')
const routerRoom = express.Router()


routerRoom.get('/allRooms',getAllRooms)
routerRoom.get('/:name',getRooms)
routerRoom.get('/:UserId',getAllRoomsForOneUser)
routerRoom.get("/messageByRoom/:RoomId",getAllMessageForOneRoom)
routerRoom.post('/addRoom',add)
routerRoom.delete('/:name',deleted)
routerRoom.put('/:name',updateRoom)
routerRoom.post('/brandadd/:RoomId',addRoomsUser)

module.exports=routerRoom
