const sequalize =require('sequelize')
const {db}=require("../models/model.js")

module.exports={
    getAllRooms: async function (req,res){
       try {
           const allRooms= await db.Room.findAll({
            include: { all: true, nested: true }
           })

           res.status(200).send(allRooms)
       } catch (error) {
           throw error
       
       }
    },
    getRooms: async function (req,res){
        try {
            const allRooms= await db.Room.findAll({
            where:{name:req.params.name}
            })
 
            res.status(200).send(allRooms)
        } catch (error) {
            throw error
        
        }
     },
    getAllRoomsForOneUser: async function (req,res){
       try {
           const oneRoom= await db.User.findOne({
            include:[
                          "Room"           
                             ],
              where :{id:req.params.UserId}
           })
        
           res.status(200).send(oneRoom)
       } catch (error) {
           throw error
       }
    },
    getAllMessageForOneRoom: async function (req,res){
        try {
            const oneRoom= await db.Room.findAll({
                where :{id:req.params.RoomId},
                 include: [{
                    model:db.Message,include:[{
                        model: db.User
                    }]
                 }]
       

           
            })
         
            res.status(200).send(oneRoom)
        } catch (error) {
            throw error
        }
     },
    
    add: async function (req,res){
       try {
           const newRoom= await db.Room.create({
              name:req.body.name,
     
           })
           res.status(201).send(newRoom)
       } catch (error) {
           throw error
       }
    },
    deleted: async function (req,res){
       try {
           const roomDeleted= await db.Room.destroy({
         where:{name:req.params.name }
           })
           res.json(roomDeleted)
       } catch (error) {
           throw error
       }
    },
    addRoomsUser: async function (req,res){
        const UserId = req.body.UserId;
        const name = req.body.name;
        try {
            const roomResult = await db.Room.create({
                name
            });
            const room = roomResult.dataValues;
            const newRoom= await db.RoomUser.create({
              UserId,
              RoomId: room.id
      
        });
            res.status(201).send(room)
        } catch (error) {
            throw error
        }
     },
      updateRoom: async function (req,res){
        try {
            const updatedRoom= await db.Room.update({name:req.body.name},{
          where:{name:req.params.name }
            })
            res.status(202).send(updatedRoom)
        } catch (error) {
            throw error
        }
     }


     
  
   
   }