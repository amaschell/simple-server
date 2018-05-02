'use strict';

const mysql = require('mysql');

/**
 * A class abstracting the 'mysql' node.js driver by adding logic for promises as the mysql driver
 * currently does not provide a proper logic for ES6 Promises.
 */
class Database {
    constructor() {
        // Define the user name and the password of your database here!
        this.pool = mysql.createPool({
            connectionlimit: 5,
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'SimpleServer'
        });
    }

    /**
     * Executes a SQL query for the configured database after getting the connection from the pool and wraps the return
     * value in a promise.
     *
     * @param {string} sqlStatement The SQL statement to execute.
     * @param args Additional arguments. Attention: User input that should get escaped should be
     * @returns {Promise<any>} The promise wrapper. Rejected if an error happened during the execution of the query.
     *                         Resolved with the result rows of the database querying operation otherwise.
     */
    performQuery(sqlStatement, args) {
        // Wrap the execution of the query in a promise so that 'callback hell' can get avoided and so that
        // the caller can react properly to the result of this async operation.
        return new Promise((resolve, reject) => {
            // Get the connection to the pool first.
            this.pool.getConnection((connectionError, connection) => {
                if (connectionError) {
                    return reject('Error connecting to the database: ' + connectionError.stack);
                } else {
                    // Execute the query.
                    // Attention: If a user input value needs to be escaped, the query should contain a '?' for this
                    // value and the variable representing it needs to be in 'args'.
                    // See https://www.npmjs.com/package/mysql for more info on this!
                    connection.query(sqlStatement, args, (queryError, resultRows) => {
                        // Release the pool after each query execution, whether it has succeeded or not.
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

    /**
     * Closes the database connection by closing the pool.
     * @returns {Promise<any>} The promise wrapper. Resolved if the operation was successful. Rejected with
     *                         the error otherwise.
     */
    close() {
        return new Promise((resolve, reject) => {
            // Close the pool.
            this.pool.end((error) => {
                if (error) {
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