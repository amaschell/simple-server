'use strict';

const mysql = require('../config/mysql');
const queries = require('../config/queries');

module.exports.getAllPosts = function(callback) {

    mysql.getConnection((connection) => {
        connection.query(
            queries.GET_ALL_POSTS,
            (error, result) => {
                connection.release();
                callback(error, result);
            }
        );
    });
};

module.exports.getPostById = function(slug, callback) {

    mysql.getConnection((connection) => {
        connection.query(
            queries.GET_POST,
            [slug],
            (error, result) => {
                connection.release();
                callback(error,result);
            }
        );
    });
};