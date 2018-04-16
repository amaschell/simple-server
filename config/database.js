'use strict';

const mysql = require('mysql');

/**
 * A class abstracting the 'mysql' node.js driver and adding logic for promises as the mysql driver
 * currently does not provide a proper logic for ES6 Promises.
 */
class Database {
    constructor() {
        this.pool = mysql.createPool({
            connectionlimit: 5,
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'SimpleServer'
        });
    }

    performQuery(sqlStatement, args) {
        // Wrap the execution of the query in a promise so that a callback hell can get avoided and so that
        // the caller can react properly to the result of this async operation
        return new Promise((resolve, reject) => {
            // Get the connection to the pool first.
            this.pool.getConnection((connectionError, connection) => {
                if (connectionError) {
                    console.error('Error connecting to the database: ' + connectionError.stack);
                } else {
                    // Perform the query.
                    // Attention: If a user input value needs to be escaped, the query should contain a '?' for this
                    // value and the variable representing it needs to be in 'args'.
                    // See https://www.npmjs.com/package/mysql for more info on this!
                    connection.query(sqlStatement, args, (queryError, resultRows ) => {
                        // Release the pool after each query execution, whether it succeeded or not.
                        connection.release();

                        if (queryError) {
                            return reject(queryError);
                        }

                        resolve(resultRows);
                    });
                }
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            // Close pool
            this.pool.end((error) => {
                if (error) {
                    console.log(error);
                    return reject(error);
                } else {
                    console.log('The mysql pool with all its connections has been closed.');
                    resolve();
                }
            });
        });
    }
}

// Only one instance of the database abstraction should exist!
const DATABASE_SINGLETON = new Database();

module.exports.getInstance = DATABASE_SINGLETON;