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
  },
  {
    title: 'Inventory management system',
    content: 'We currenly recording items in excel and needs a more responsive web site. Budget $1500',
    user_id: 3
  },
  {
    title: 'Web profile',
    content: 'Hoping to get some help with adding CSS to the HTML profile. Budget $50',
    user_id: 4
  },
  {
    title: 'Social media website',
    content: 'We have created the website and already have a working local version. Need help connecting it to Heroku server',
    user_id: 4
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'There will be some content here',
    user_id: 4
  },
  {
    title: 'Duis ac nibh.',
    content: 'There will be some content here',
    user_id: 3
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    content: 'There will be some content here',
    user_id: 1
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'There will be some content here',
    user_id: 1
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    content: 'There will be some content here',
    user_id: 2
  },
  {
    title: 'Donec dapibus.',
    content: 'There will be some content here',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
