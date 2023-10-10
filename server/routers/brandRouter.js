const { getAllBrand, getBrand, getAllBrandForOneUser,addBrandUser,add,deleted,updateBrand}=require("../controllers/brandController")
const express = require('express')
const routerBrand = express.Router()


routerBrand.get('/allBrands',getAllBrand)
routerBrand.get('/:name',getBrand)
routerBrand.get('/:UserId',getAllBrandForOneUser)

routerBrand.delete('/:name',deleted)
routerBrand.put('/:name',updateBrand)
routerBrand.post('/brandadd/:UserId',addBrandUser)
module.exports=routerBrand