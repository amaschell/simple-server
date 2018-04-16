'use strict';

const users = require('../models/users');

module.exports.allUsers = function(request, result, next) {

    users.getAllAuthors((error, list) => {
        if (error) {
            result.sendStatus(500);
        } else {
            result.json(list);
        }

        return next();
    });

};