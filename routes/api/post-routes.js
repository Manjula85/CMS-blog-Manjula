const router = require('express').Router();
const { Post, User } = require('../../models');

//get all posts
router.get('/', (req,res) => {
    Post.findAll({
        attributes: ['id','title', 'content', 'created_at'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        res.status(500).json(err);
    });
});

//get by id number
router.get('/:id', (req,res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id','title', 'content', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {

        if(!dbPostData){
            res.status(404).json({message: 'No post found with this id'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

//create a new post
router.post('/', (req, res) => {
    
    Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.body.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        res.status(500).json(err);
      });
});

//update ID
router.put('/:id', (req, res) => {
    Post.update(
      {
        title: req.body.title
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        res.status(500).json(err);
      });
});

//delete post by id
router.delete('/:id', (req,res) => {
    Post.destroy({
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