const { Sequelize,DataTypes  } = require('sequelize')
const connection= new Sequelize('fashion', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });

 connection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 })


 const db={}
 db.connection=connection
 db.Sequelize=Sequelize
 db.Product=require('./productModel') (Sequelize,DataTypes,connection)
 db.User= require("./usersModel.js") (Sequelize,DataTypes,connection)
 db.Room=require("./roomModel.js")(Sequelize,DataTypes,connection)
 db.Brand=require("./brandModel") (Sequelize,DataTypes,connection)
 db.Message=require("./messageModel") (Sequelize,DataTypes,connection)
 db.RoomUser=require("./roomUserModel") (Sequelize,DataTypes,connection)
 db.RoomMessage=require("./roomMessageModel") (Sequelize,DataTypes,connection)
//  db.UserProduct=require("./userProductModel.js")(Sequelize,DataTypes,connection)
 db.UserBrand=require("./userBrandModel.js") (Sequelize,DataTypes,connection)
 db.User.belongsToMany(db.Room,{ through: db.RoomUser }) 
 db.Room.belongsToMany(db.User,{ through: db.RoomUser }) 

 db.User.belongsToMany(db.Brand,{ through: db.UserBrand }) 
 db.Brand.belongsToMany(db.User,{ through: db.UserBrand }) 


 db.User.hasMany(db.Product) 
 db.Product.belongsTo(db.User) 


 db.Message.belongsToMany(db.Room,{ through: db.RoomMessage }) 
 db.Room.belongsToMany(db.Message,{ through: db.RoomMessage }) 
 
db.User.hasMany(db.Message)
db.Message.belongsTo(db.User)
// connection.sync({ alter: true})


 module.exports.db=db





