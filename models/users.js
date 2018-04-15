'use strict';

const mysql = require('../config/mysql');

module.exports.getAllAuthors = function (callback) {

    mysql.getConnection(function(connection) {
        connection.query(
            'SELECT u.id, u.first_name as firstName, u.last_name as lastName, u.description, u.profile_picture as profilePicture ' +
            'FROM users u ' +
            'GROUP BY u.id;',

            function(err, result){
                connection.release();
                callback(err, result);
            }
        );
    });
};