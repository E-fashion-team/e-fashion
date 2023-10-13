module.exports=(sequelize, DataTypes,connection)=>{

  const Product = connection.define('Product', {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true
    },

  name:DataTypes.STRING,
  price:DataTypes.INTEGER,
  image:DataTypes.STRING,
  category:{
   type:DataTypes.ENUM , 
   values : ["men","women","kids","other"]
  },
  typeProd:{
    type:DataTypes.ENUM , 
    values : ["product" , "NFT"] 
     }
     }

     )
     return Product
  }