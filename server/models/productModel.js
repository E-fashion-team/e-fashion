
module.exports=(sequelize, DataTypes,connection)=>{

    const Product = connection.define('Product', {
    
        id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           primaryKey:true,
           autoIncrement:true
         },
      
       name:DataTypes.STRING,
       image:DataTypes.STRING,
       price:DataTypes.INTEGER,
       category:DataTypes.STRING 
       }
     
       )
       return Product
    }