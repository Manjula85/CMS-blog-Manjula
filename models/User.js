const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//Get the template from Model to create User model
class User extends Model {
    // set up method to run on instance data (per user) to check password
    
    checkPassword(loginPw) {
        console.log('loginPW: '+ loginPw);
        console.log('this.password: '+ this.password);
        return bcrypt.compareSync(loginPw, this.password);
    }
}

//User initialization
User.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            //primaryKey: true   // To make them unique
        },
        password:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [4]
            }
        }
    },
    {
        hooks:{
            //creating an encrypted password
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
                },

            //retrieving the encrypted password
            async beforeUpdate(updatedUserData){
                updatedUserData.password = await bcrypt.hash(updatedUserData.password,10);
                return updatedUserData;
            }        
        },    
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;