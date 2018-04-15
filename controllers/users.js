'use strict';

const users = require('../models/users');
const async = require('async');


module.exports.allUsers = function(req, res, next) {

    users.getAllAuthors(function(err, list) {
        if (err) {
            console.log(err);
            res.status(500).json({ status: 'failure', message: 'Error on the server.', internal: err });
            return next();
        } else {
            async.eachSeries(
                list,
                function(item, callback) {
                    callback();
                },
                function(err) {
                    if (err) {
                        console.log(err);
                        res.status(500).json({ status:'failure', message: err });

                        return next();
                    } else {
                        res.json(list);
                        return next();
                    }
                }
            );
        }
    });

};