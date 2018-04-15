'use strict';

const users = require('../models/users');
const async = require('async');

module.exports.allUsers = function(request, result, next) {

    users.getAllAuthors((error, list) => {
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
                    if (error) {
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