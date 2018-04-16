'use strict';

const posts = require('../models/posts');
const async = require('async');

module.exports.allPosts = function(request, result, next) {

    posts.getAllPosts((error, list) => {
        if (error) {
            result.sendStatus(500).json({ status: 'failure', message: 'Error on the server.', internal: error });
            return next();
        } else {
            async.eachSeries(
                list,
                (item, callback) => {
                    callback();
                },
                (error) => {
                    if (error){
                        result.sendStatus(500).json({ status:'failure', message: error });
                        return next();
                    } else {
                        result.json(list);
                        return next();
                    }
                }
            );
        }
    });
};

module.exports.postBySlug = function(request, res, next) {
    const postUrl = request.params.slug;

    posts.getPostBySlug(postUrl, (error, result) => {
        if (error) {
            res.sendStatus(500).json({ status: 'failure', message: error });
            return next();
        } else if (result.length === 0 ) {
            res.sendStatus(404).json({ status: 'failure', message: `The post with the url ${postUrl} does not exist.` });
            return next();
        } else {
            res.json(result[0]);
            return next();
        }
    });
};

module.exports.latestPost = function(request, res, next) {

    posts.getLatestPost((error, result) => {
        if (error) {
            res.sendStatus(500).json({ status: 'failure', message: error });
            return next();
        } else if (result.length === 0 ) {
            res.json({});
            return next();
        } else {
            res.json(result[0]);
            return next();
        }
    });
};