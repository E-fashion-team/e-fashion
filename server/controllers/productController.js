
const sequalize =require('sequelize')
const {db}=require("../models/model")
const {Op} = require('sequelize')

module.exports={
    getAllProduct: async function (req,res){
       try {
           const allProducts= await db.Product.findAll()
           res.status(200).send(allProducts)
       } catch (error) {
           throw error
       
       }
    },
    getAllByTypeProd: async function (req,res){
       try {
           const response = await db.Product.findAll({
              where :{typeProd: req.params.typeProd}
           })
           res.status(200).send(response)
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
                category:req.body.category,
                typeProd:req.body.typeProd,
                UserId:req.body.UserId
            })
            console.log(newProduct);
            res.status(201).send({message :"product added succesfully",newProduct})
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
     },
     search: async function (req, res) {
        try {
          let whereCondition = {}; // Initialize an empty object for the WHERE condition
      
          if (req.params.query) {
            // If a query parameter is provided, set the name filter
            whereCondition.name = {
              [Op.like]: req.params.query
            };
          }
      
          // Use the whereCondition object in the findAll method
          const response = await db.Product.findAll({
            where: whereCondition
          });
      
          // If the query is successful, respond with a status code of 200 and the response data
          res.status(200).send(response);
        } catch (error) {
          // If an error occurs during the query, respond with a status code of 500 and the error message
          throw error
        }
      }
    }