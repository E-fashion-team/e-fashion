
const sequalize =require('sequelize')
const {db}=require("../models/model")

module.exports={
    getAllProduct: async function (req,res){
       try {
           const allProducts= await db.Product.findAll()
           res.status(200).send(allProducts)
       } catch (error) {
           throw error
       
       }
    },
    getOneProduct: async function (req,res){
       try {
           const oneProduct= await db.Product.findOne({
              where :{name:req.params.name }
           })
           res.status(200).send(oneProduct)
       } catch (error) {
           throw error
       }
    },
    add: async function (req,res){
       try {
           const newProduct= await db.Product.create({
              name:req.body.name,
               price:req.body.price,
               image:req.body.image,
               UserId:req.body.UserId
            
           })
           res.status(201).send(newProduct)
       } catch (error) {
           throw error
       }
    },
    deleted: async function (req,res){
       try {
           const productDeleted= await db.Product.destroy({
         where:{  name:req.params.name }
           })
           res.send(productDeleted)
       } catch (error) {
           throw error
       }
    },
    updated:async function (req,res){
        try {
            const productUpdate= await db.Product.update(req.body,{
          where:{  name:req.params.name }
            })
            res.send (productUpdate)
        } catch (error) {
            throw error
        }
     }
   
   }