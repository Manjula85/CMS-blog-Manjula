//To get the sequelize constructor
const Sequelize = require('sequelize');

require('dotenv').config();

//Create the connection to the database
const sequelize = new Sequelize('cms_blog_post', 'root', '*GetDone21$#', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;