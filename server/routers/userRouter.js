const { getAllUsers, getOneUser, add,deleted,updated,login,signUp}=require("../controllers/userController")
const express = require('express')
const routerUsers = express.Router()


routerUsers.get('/allUsers',getAllUsers)
routerUsers.get('/:id',getOneUser)
routerUsers.post('/newUser',add)
routerUsers.delete('/:name',deleted)
routerUsers.put('/:name',updated)
routerUsers.post("/singup",signUp)
routerUsers.post("/login",login)

module.exports=routerUsers