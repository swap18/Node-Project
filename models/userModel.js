module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        // attributes
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_email: {
            type: DataTypes.STRING,
            
        },
        user_password: {
            type: DataTypes.STRING,
            
        },
        user_image: {
            type: DataTypes.TEXT,
           
        },
        total_orders: {
            type: DataTypes.STRING,
            
        }

      
    },
    {
        freezeTableName: true,
        allowNull: false,
        tableName: 'user',
        timestamps: true,
        updatedAt:false,
    });
    
        
    

    return User;
}
