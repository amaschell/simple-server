module.exports = function(app) {

    app.get('/', function(req, res){
        res.send('This is the home page!');
    });

    app.get('/about', function (req, res) {
        const allUsers = require('../test_data/users.json');
        res.send(allUsers);
    });

    app.get('/posts', function (req, res) {
        const allPosts = require('../test_data/posts.json');
        res.send(allPosts);
    });

    app.get('/posts/:id', function (req, res) {
        const allPosts = require('../test_data/posts.json');
        const post = allPosts.find(p => p.url === req.params.id);
        res.send(post);
    });
};