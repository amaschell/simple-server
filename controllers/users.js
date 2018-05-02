'use strict';

const database = require('../config/database');


// Gets all authors sorted in ascending order by their ids.
const GET_ALL_USERS = 'SELECT u.id, u.first_name AS firstName, u.last_name AS lastName, u.description, ' +
                             'u.profile_picture AS profilePicture ' +
                      'FROM users u ' +
                      'ORDER BY u.id;';


/**
 * Fetches all users from the database asynchronously. Sends an HTTP 500 code if the operation failed for any reason.
 *
 * @param request The incoming request object.
 * @param result The outgoing response object.
 * @returns {Promise<void>} The promise returned from the asynchronous function.
 */
module.exports.allUsers = async function(request, result) {
    try {
        const userResults = await database.getInstance.performQuery(GET_ALL_USERS);
        result.json(userResults);
    } catch (error) {
        console.error(error);
        result.status(500).send(
            {
                type: 'exception',
                message: 'Getting all users from database failed due to an internal server error!',
                error: error
            }
        );
    }
};