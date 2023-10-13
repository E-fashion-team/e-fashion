const sequalize =require('sequelize')
const {db}=require("../models/model.js")
const io = require('socket.io')

module.exports={
    getAllMessages: async function (req,res){
       try {
           const allMessages= await db.Message.findAll()
           res.status(200).send(allMessages)
       } catch (error) {
           throw error
       
       }
    },
    getOneMessage: async function (req,res){
       try {
           const oneMessage= await db.Message.findOne({
              where :{UserId:req.params.UserId }
           })
           res.status(200).send(oneMessage)
       } catch (error) {
           throw error
       }
    },
    add: async function (req,res){
        console.log(req.params.roomId)
        
       try {
           const newMessage= await db.Message.create({
            message:req.body.message,
            UserId:req.body.UserId,
                
           })
           const addMessageToRoom=await db.RoomMessage.create({
            MessageId: newMessage.id,
            RoomId : req.params.RoomId

        })
        // io.emit('newMessage', newMessage);
           res.status(201).send(newMessage)
       } catch (error) {
           throw error
       }
    },
    deleted: async function (req,res){
       try {
           const messageDeleted= await db.Message.destroy({
         where:{  UserId:req.params.UserId }
           })
           res.json(messageDeleted)
       } catch (error) {
           throw error
       }
    },
    updated:async function (req,res){
        try {
            const msgUpdate= await db.Message.update(req.body,{
          where:{  message:req.params.message }
            })
            res.send(msgUpdate)
        } catch (error) {
            throw error
        }
    }
  
   
   }