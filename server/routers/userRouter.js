const { getAllUsers, getOneUser, add,deleted,updated,login,signUp, getUser,checkpassword}=require("../controllers/userController")
const express = require('express')
const mid= require("../middleware/index")
const routerUsers = express.Router()


routerUsers.get('/allUsers',getAllUsers)
routerUsers.get('/getById/:id',getOneUser)
routerUsers.post('/newUser',add)
routerUsers.delete('/:name',deleted)
routerUsers.put('/:id',updated)
routerUsers.post("/singup",signUp)
routerUsers.post("/login",login)
routerUsers.get("/getuser",mid,getUser )
routerUsers.post('/modify',checkpassword)

module.exports=routerUsers