'use strict';

// Controllers
const postsController  = require('../controllers/posts');
const usersController  = require('../controllers/users');

module.exports = function(app) {

    app.get('/', function(req, res) {
        const allPosts = require('../test_data/posts.json');
        res.status(200).send(allPosts[0]);
    });

    app.get('/about', usersController.allUsers);

    app.get('/posts', postsController.allPosts);

    app.get('/posts/:id', function(req, res) {
        const allPosts = require('../test_data/posts.json');
        const post = allPosts.find(p => p.url === req.params.id);
        res.send(post);
    });

    app.post('/send-contact-mail', function(req, res) {
        res.status(200).send('Mail was sent!');
    });
};