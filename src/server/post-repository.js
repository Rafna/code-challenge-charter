const usr = require('./user-repository');
const comnt = require('./comment-repository');

const posts = [{
  id: 0,
  user: [usr],
  title: "World",
  body: "Hello World!",
  comments: [comnt]
},
{
  id: 1,
  user: [usr],
  title: "Planet",
  body: "Hi Planet!",
  comments: [comnt]
}
]
