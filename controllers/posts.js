'use strict';

const posts = require('../models/posts');

module.exports.allPosts = function(request, result, next) {

    posts.getAllPosts((error, list) => {
        if (error) {
            result.sendStatus(500);
        } else {
            result.json(list);
        }

        return next();
    });
};

module.exports.postBySlug = function(request, res, next) {
    const postUrl = request.params.slug;

    posts.getPostBySlug(postUrl, (error, result) => {
        if (error) {
            res.sendStatus(500);
        } else if (result.length === 0 ) {
            res.sendStatus(404);
        } else {
            res.json(result[0]);
        }

        return next();
    });
};

module.exports.latestPost = function(request, res, next) {

    posts.getLatestPost((error, result) => {
        if (error) {
            res.sendStatus(500);
        } else if (result.length === 0 ) {
            // Send empty object if there is no latest post yet!
            res.json({});
        } else {
            res.json(result[0]);
        }

        return next();
    });
};