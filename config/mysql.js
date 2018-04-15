'use strict';

const mysql = require('mysql');

const pool = mysql.createPool({
    connectionlimit: 5,
    host: 'localhost',
    user: 'root',
    password: 'tmxxxcoreadmin',
    database: 'SimpleServer'
});

function getConnection(callback) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.error('Error connecting to the database: ' + err.stack);
        } else {
            callback(connection);
        }
    });
}

module.exports.getConnection = getConnection;

module.exports.query = function () {
    const args = Array.prototype.slice.call(arguments);
    const callback = args.pop();

    getConnection(function (connection) {

        args.push(function callbackQuery(error, result) {
            connection.release();
            return callback(error, result);
        });

        connection.query.apply(connection, args);
    });

};

module.exports.cleanup = function() {
    pool.end(function (err){
        if (err){
            console.log(err);
        } else {
            console.log('The mysql pool with all its connections has been closed.');
        }
    });
};