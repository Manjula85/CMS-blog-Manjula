const router = require('express').Router();
const { Comment, Post, User } = require('../../models');

//find all
router.get('/', (req,res) => {
    Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => res.status(500).json(err));
});

//create
router.post('/', (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => res.status(400).json(err));
});

//update
router.put('/', (req,res) => {

});

//delete
router.delete('/', (req, res) => {
    Comment.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if(!dbPostData){
            res.status(404).json({message: 'No post found with thid id'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;