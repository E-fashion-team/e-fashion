module.exports=(sequelize, DataTypes,connection)=>{

    const User = connection.define('User', {
    
        id: {
           type: DataTypes.INTEGER,
        
           primaryKey:true,
           autoIncrement:true
         },
      
       name:DataTypes.STRING,
       image:DataTypes.STRING,
       email:DataTypes.STRING,
       password:DataTypes.STRING,
       dateOfBirth:DataTypes.STRING,
       role:{
        type:DataTypes.ENUM , 
        values : ["follower","brand","fashionesta"]
       }
       }
     
       )
       return User
    }


    