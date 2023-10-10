
module.exports=(sequelize, DataTypes,connection)=>{

    const Messages = connection.define('Messages', {
    
        id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           primaryKey:true,
           autoIncrement:true
         },
      
        message:DataTypes.STRING
        
       }
     
       )
       return Messages
    }