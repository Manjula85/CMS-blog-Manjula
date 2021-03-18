//index file is the first place that is accessed in the models folder.

const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comments');

//creating associations
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post, Comment };