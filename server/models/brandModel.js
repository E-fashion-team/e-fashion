module.exports=(sequelize, DataTypes,connection)=>{

    const Brand = connection.define('Brand', {
    
        id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           primaryKey:true,
           autoIncrement:true
         },
      
       name:DataTypes.STRING,
       image:DataTypes.STRING,
       
       }
     
       )
       return Brand
    }
