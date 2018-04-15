'use strict';

const posts = require('../models/posts');
const async = require('async');

module.exports.allPosts = function(request, result, next) {

    posts.getAllPosts((error, list) => {
        if (error) {
            result.send(500).json({ status: 'failure', message: 'Error on the server.', internal: error });
            return next();
        } else {
            async.eachSeries(
                list,
                (item, callback) => {
                    callback();
                },
                (error) => {
                    if (error){
                        result.send(500).json({ status:'failure', message: error });
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