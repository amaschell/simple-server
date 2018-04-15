'use strict';

const mysql = require('../config/mysql');
const queries = require('../config/queries');

module.exports.getAllAuthors = function (callback) {

    mysql.getConnection((connection) => {
        connection.query(
            queries.GET_ALL_USERS,
            (error, result) => {
                connection.release();
                callback(error, result);
            }
        );
    });
};