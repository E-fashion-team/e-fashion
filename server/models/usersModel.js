module.exports=(sequelize, DataTypes,connection)=>{

    const User = connection.define('User', {
      name:{
        type:DataTypes.STRING,
        allowNull:false
      },

       image:DataTypes.STRING,
       email:DataTypes.STRING,
       password:DataTypes.STRING,
       dateOfBirth:DataTypes.STRING,
       role:{
        type:DataTypes.ENUM , 
        values : ["follower","brand","fashionista"]
       }
       }
     
       )
       return User
    }


    