module.exports=(sequelize, DataTypes,connection)=>{

    const Room= connection.define('Room', {
    
        id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           primaryKey:true,
           autoIncrement:true
         },
      
       name:DataTypes.STRING,
      
       }
     
       )
       return Room
    }
