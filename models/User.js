const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Get the template from Model to create User model
class User extends Model {}

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
            allowNull: false
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
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;