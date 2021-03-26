const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Rose	Bond',
    password: 'rose',
  },
  {    
    username: 'Harry Nash',    
    password: 'harry',       
  },
  {    
    username: 'Dominic Duncan',    
    password: 'dominic',       
  },
  {    
    username: 'Richard Mackenzie',
    password: 'richard',
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
