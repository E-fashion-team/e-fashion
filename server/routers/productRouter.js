const { getAllProduct, getOneProduct, add,deleted,updated}=require("../controllers/productController")
const express = require('express')
const routerProduct = express.Router()


routerProduct.get('/allProduct',getAllProduct)
routerProduct.get('/:UserId',getOneProduct)
routerProduct.post('/newProduct',add)
routerProduct.delete('/:name',deleted)
routerProduct.put('/:name',updated)

module.exports=routerProduct