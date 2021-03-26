const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'You can remove bullets by setting the list-style-type to none on the CSS for the parent element.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'If you\'re using Bootstrap, it has an "unstyled" class.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'ID and NAME tokens must begin with a letter ([A-Za-z]) and may be followed by any number of letters, digits ([0-9]), hyphens ("-"), underscores ("_"), colons (":"), and periods (".").',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'jQuery does handle any valid ID name. You just need to escape metacharacters (i.e., dots, semicolons, square brackets...).',
    user_id: 4,
    post_id: 2
  },
  {
    comment_text: 'Try using: <meta http-equiv="refresh" content="0; url=http://example.com/" />  Note: Place it in the head section.',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'With localStorage, web applications can store data locally within the user\'s browser. Before HTML5, application data had to be stored in cookies, included in every server request.',
    user_id: 2,
    post_id: 4
  },
  {
    comment_text: 'Well, local storage speed greatly depends on the browser the client is using, as well as the operating system.',
    user_id: 3,
    post_id: 4
  },
  {
    comment_text: 'I have helped many with web profiles. I am proficient in CSS. Rate: $15/hr',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'We specialize in making custom full stack websites for inventory management systems. Rate $50/hr',
    user_id: 1,
    post_id: 5
  },
  {
    comment_text: 'I regulary use Heroku and have helped many with maintaining there Heroku site. Rate $30/hr',
    user_id: 2,
    post_id: 7
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
