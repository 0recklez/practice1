const delay = ms => new Promise(r => setTimeout(r, ms));

const getUser = id => delay(20).then(() => ({ id, name: 'Alice' }));
const getPosts = uid => delay(20).then(() => [{ id: 1, userId: uid }, { id: 2, userId: uid }]);
const getFirstPostComments = pid => delay(20).then(() => [{ id: 11, postId: pid }]);

getUser(6) // { id: 6, name: 'Alice' }
    .then((user) => getPosts(user.id)) // [{ id: 1, userId: 6 }, { id: 2, userId: 6 }]
    .then((posts) => getFirstPostComments(posts[0].id)) [{ id: 11, postId: 1 }]
    .then((result) => console.log(result))

