const router = require('express').Router();
const sequelize = require("../config/connection");
const { User } = require("../models");

router.get('/', (req,res) => {
    res.render('homepage', {
        id: 1,
        title: 'Handlebar docs',
        created_at: new Date(),
        comments: [{}, {}],
        user:{
            username: 'test_user'
        }
    });
});

module.exports = router;