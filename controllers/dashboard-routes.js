const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth"); // <--- Not used still (add it to proper, POST, PUT and DELETE Methods)

router.get('/', (req,res) => {
    Post.findAll({
        // where: {
        //     //using the ID from the session
        //     user_id: req.session.user_id
        // },
        attributes: [
            'id',
            'title',
            'content',
            'created_at'
        ]
    })
        .then(dbPostData => {
            // serialize data before passing to template
            const posts = dbPostData.map(post => post.get({plain: true}));
            res.render('dashboard', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

// router.get("/", (req, res) => {
//   res.render("dashboard", { loggedIn: true });
// });

module.exports = router;
