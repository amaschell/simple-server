'use strict';

const database = require('../database/database');


// Get all posts sorted in descending order by the creation dates (i.e. latest posts first).
// If 2 or more posts have the same creation date, these posts are getting again sorted in descending order by their ids!
const GET_ALL_POSTS = 'SELECT p.id, DATE_FORMAT(p.creation, \'%d.%m.%Y\') AS date, p.title, p.url, p.abstract, ' +
                              'CONCAT(u.first_name, \' \', u.last_name) AS author ' +
                      'FROM posts p ' +
                      'INNER JOIN users u ON p.author = u.id ' +
                      'ORDER BY p.creation DESC, p.id DESC;';

// Get the single unique post that matches the given URL slug.
// Important: The URL slug should have been escaped by the function that is using this query!
const GET_POST = 'SELECT p.id, DATE_FORMAT(p.creation, \'%d.%m.%Y\') AS date, p.title, p.url, p.abstract, ' +
                         'CONCAT(u.first_name, \' \', u.last_name) AS author, p.content ' +
                 'FROM posts p ' +
                 'INNER JOIN users u ON p.author = u.id ' +
                 'WHERE p.url = ?;';

// Gets the latest post which is the post with the latest creation date and the highest id.
const GET_LATEST_POST = 'SELECT p.id, DATE_FORMAT(p.creation, \'%d.%m.%Y\') AS date, p.title, p.url, p.abstract ' +
                        'FROM posts p ' +
                        'WHERE p.creation = (SELECT MAX(p2.creation) FROM posts p2) ' +
                               'AND p.id = (SELECT MAX(p3.id) FROM posts p3);';


/**
 * Fetches all posts from the database asynchronously. Sends an HTTP 500 code if the operation failed for any reason.
 *
 * @param request The incoming request object.
 * @param result The outgoing response object.
 * @returns {Promise<void>} The promise returned from the asynchronous function.
 */
module.exports.allPosts = async function(request, result) {
    try {
        const postResults = await database.getInstance.performQuery(GET_ALL_POSTS);
        result.json(postResults);
    } catch (error) {
        console.error(error);
        result.status(500).send(
            {
                type: 'exception',
                message: 'Getting all posts from database failed due to an internal server error!',
                error: error
            }
        );
    }
};

/**
 * Fetches a specific post from the database asynchronously by searching for the post's URL slug.
 * If the post has not been found, an HTTP 404 code is sent to the client. Otherwise for every other error,
 * an HTTP 500 code is sent to the client.
 *
 * @param request The incoming request object.
 * @param result The outgoing response object.
 * @returns {Promise<void>} The promise returned from the asynchronous function.
 */
module.exports.postBySlug = async function(request, result) {
    const postUrl = request.params.slug;

    try {
        const postResult = await database.getInstance.performQuery(GET_POST, [postUrl]);

        if (postResult.length === 0) {
            result.sendStatus(404);
        } else {
            result.json(postResult[0]);
        }
    } catch (error) {
        console.error(error);
        result.status(500).send(
            {
                type: 'exception',
                message: `Getting the post with url ${postUrl} from database failed due to an internal server error!`,
                error: error
            }
        );
    }
};

/**
 * Fetches the latest post from the database asynchronously. If there are no posts yet in the database, an empty
 * object is sent to the client. Otherwise for every other error, an HTTP 500 code is sent to the client.
 *
 * @param request The incoming request object.
 * @param result The outgoing response object.
 * @returns {Promise<void>} The promise returned from the asynchronous function.
 */
module.exports.latestPost = async function(request, result) {
    try {
        const latestPost = await database.getInstance.performQuery(GET_LATEST_POST);

        if (latestPost.length === 0) {
            // Send empty object if there is no latest post yet!
            result.json({});
        } else {
            result.json(latestPost[0]);
        }
    } catch (error) {
        console.error(error);
        result.status(500).send(
            {
                type: 'exception',
                message: 'Getting the latest post from database failed due to an internal server error!',
                error: error
            }
        );
    }
};