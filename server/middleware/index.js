require('dotenv').config();
const jwt = require ("jsonwebtoken")
const {db}=require("../models/model")

const authProtection= async(req,res,next)=>{
    let token 
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    try{
// Get token fron header
token= req.headers.authorization.split(" ")[1]

//Verify token 
const decoded= jwt.verify(token,process.env.jwt)
console.log("hi decoded",decoded)
//Get User from the token 
req.user = await db.User.findByPk(decoded.id)


next()
}

catch(error){
    console.log(error)
    res.status(401)
    throw new Error("Not authorized")

}    }

if(!token){

    res.status(401)
    throw new Error("Not authorized,no token ")
}

}
module.exports= authProtection