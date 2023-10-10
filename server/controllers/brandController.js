const sequalize =require('sequelize')
const {db}=require("../models/model.js")

module.exports={
    getAllBrand: async function (req,res){
       try {
           const allBrand= await db.Brand.findAll({
            include: { all: true, nested: true }
           })

           res.status(200).send(allBrand)
       } catch (error) {
           throw error
       
       }
    },
    getBrand: async function (req,res){
        try {
            const Brands= await db.Brand.findAll({
            where:{name:req.params.name}
            })
 
            res.status(200).send(Brands)
        } catch (error) {
            throw error
        
        }
     },
    getAllBrandForOneUser: async function (req,res){
       try {
           const oneBrand= await db.User.findOne({
            include:[
                          "Brand"           
                             ],
              where :{id:req.params.UserId}
           })
        
           res.status(200).send(oneBrand)
       } catch (error) {
           throw error
       }
    },
   
    add: async function (req,res){
       try {
           const newBrand= await db.Brand.create({
              name:req.body.name,
     
           })
           res.status(201).send(newBrand)
       } catch (error) {
           throw error
       }
    },
    deleted: async function (req,res){
       try {
           const BrandDeleted= await db.Brand.destroy({
         where:{name:req.params.name }
           })
           res.json(BrandDeleted)
       } catch (error) {
           throw error
       }
    },
    addBrandUser: async function (req,res){
        const UserId = req.body.UserId;
        const name = req.body.name;
        try {
            const brandResult = await db.Brand.create({
                name
            });
            const brand = brandResult.dataValues;
            const newBrand= await db.UserBrand .create({
              UserId,
             
      
        });
            res.status(201).send(brand)
        } catch (error) {
            throw error
        }
     },
      updateBrand: async function (req,res){
        try {
            const updatedBrand= await db.Brand.update({name:req.body.name},{
          where:{name:req.params.name }
            })
            res.status(202).send(updatedBrand)
        } catch (error) {
            throw error
        }
     }
    }