'use strict';

const mysql = require('mysql');

const pool = mysql.createPool({
    connectionlimit: 5,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'SimpleServer'
});

module.exports.getConnection = function getConnection(callback) {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to the database: ' + err.stack);
        } else {
            callback(connection);
        }
    });
};

module.exports.cleanup = function() {
    pool.end((err) => {
        if (err){
            console.log(err);
        } else {
            console.log('The mysql pool with all its connections has been closed.');
        }
    });
};