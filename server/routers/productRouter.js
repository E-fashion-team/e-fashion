const { getAllProduct, getAllByTypeProd, add,deleted,updated}=require("../controllers/productController")
const express = require('express')
const routerProduct = express.Router()


routerProduct.get('/allProduct',getAllProduct)
routerProduct.get('/:typeProd',getAllByTypeProd)
routerProduct.post('/newProduct',add)
routerProduct.delete('/:name',deleted)
routerProduct.put('/:name',updated)

module.exports=routerProduct