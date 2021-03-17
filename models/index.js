//index file is the first place that is accessed in the models folder.

const User = require('./User');
const Post = require('./Post');

//creating associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };