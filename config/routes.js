'use strict';

// Controllers
const postsController  = require('../controllers/posts');
const usersController  = require('../controllers/users');

module.exports = function(app) {

    app.get('/', postsController.latestPost);

    app.get('/about', usersController.allUsers);

    app.get('/posts', postsController.allPosts);

    app.get('/posts/:slug', postsController.postBySlug);

    app.post('/send-contact-mail', function(req, res) {
        res.status(200).send('Mail was sent!');
    });
};