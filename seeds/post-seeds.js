const { Post } = require('../models');

const postdata = [
  {
    title: 'I need an unordered list without any bullets',
    content: 'I have created an unordered list. I feel the bullets in the unordered list are bothersome, so I want to remove them.Is it possible to have a list without bullets?',
    user_id: 1
  },   
  {
    title: 'What are valid values for the id attribute in HTML?',
    content: 'When creating the id attributes for HTML elements, what rules are there for the value?',
    user_id: 1
  },
  {
    title: 'Redirect from an HTML page',
    content: 'Is it possible to set up a basic HTML page to redirect to another page on load?',
    user_id: 2
  },
  {
    title: 'Local Storage vs Cookies',
    content: 'I want to reduce load times on my websites by moving all cookies into local storage since they seem to have the same functionality.',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
