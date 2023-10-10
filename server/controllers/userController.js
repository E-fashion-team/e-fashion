
const sequalize =require('sequelize')
const {db}=require("../models/model")

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const verifyUserLogin = async (email,password)=>{
    try {
        const client = await db.User.findOne({where:{email:email}})
        if(!client){
            return {status:'error',error:'client not found'}
        }
        if(await bcrypt.compare(password,client.password)){
            // creating a JWT token
            token = jwt.sign({id:client.id,name:client.name,image:client.image,email:client.email,role:client.role},process.env.jwt,{expiresIn:'2h'})
            return {status:'ok',data:token}
        }
        return {status:'error',error:'invalid password'}
    } catch (error) {
        console.log(error);
        return {status:'error',error:'timed out'}
    }
}






module.exports={
    getAllUsers: async function (req,res){
       try {
           const allUsers= await db.User.findAll()
           res.status(200).send(allUsers)
       } catch (error) {
           throw error
       
       }
    },
    getOneUser: async function (req,res){
       try {
           const oneUser= await db.User.findOne({
              where :{name:req.params.name }
           })
           res.status(200).send(oneUser)
       } catch (error) {
           throw error
       }
    },
    add: async function (req,res){
       try {
           const newUser= await db.User.create({
              name:req.body.name,
               email:req.body.email,
               password:req.body.password,
               image:req.body.image,
               role:req.body.role,
               dateOfBirth:req.body.dateOfBirth
           })
           res.status(201).send(newUser)
       } catch (error) {
           throw error
       }
    },
    deleted: async function (req,res){
       try {
           const userDeleted= await db.User.destroy({
         where:{  name:req.params.name }
           })
           res.send(userDeleted)
       } catch (error) {
           throw error
       }
    },
    updated:async function (req,res){
        try {
            const userUpdate= await db.User.update(req.body,{
          where:{  name:req.params.name }
            })
            res.send(userUpdate)
        } catch (error) {
            throw error
        }
     },  signUp :  async (req,res) =>{
        
        try {
            const {name,email,image,password} = req.body 
            const pass = await bcrypt.hash(password,10)
            const response  = await db.User.create({
                name,
                email,
                image,
                password:pass,
                role   
            })
            res.status(200).send(response)
            // return res.redirect("/signin")
          } catch (error) {
            console.log(JSON.stringify(error))
            if (error.code === 11000){
                return res.send({status:'error',error:"email already exist"})
            }
            res.json(error)
          }
    },

    login : async (req,res)=>{
        try {
            const{email,password } = req.body
            const response = await verifyUserLogin(email,password)
            if (response.status==="ok"){
                res.cookie('token',token, { maxAge: 2 * 60 * 60 * 1000, httpOnly: true }); 
              
                res.json({message :"login succesfully",response})
            }else{
            res.json(response)
            }
        } catch (error) {
          
            res.json(error)
        }
    },
   
   }
