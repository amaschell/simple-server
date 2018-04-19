'use strict';

const database = require('../config/database');
const queries = require('../config/queries');

/**
 * Fetches all users from the database asynchronously. Sends an HTTP 500 code if the operation failed for any reason.
 *
 * @param request The incoming request object.
 * @param result The outgoing response object.
 * @returns {Promise<void>} The promise returned from the asynchronous function.
 */
module.exports.allUsers = async function(request, result) {
    try {
        const userResults = await database.getInstance.performQuery(queries.GET_ALL_USERS);
        result.json(userResults);
    } catch (error) {
        console.log(error);
        result.sendStatus(500);
    }
};