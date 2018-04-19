'use strict';

const database = require('../config/database');
const queries = require('../config/queries');

/**
 * Fetches all posts from the database asynchronously. Sends an HTTP 500 code if the operation failed for any reason.
 *
 * @param request The incoming request object.
 * @param result The outgoing response object.
 * @returns {Promise<void>} The promise returned from the asynchronous function.
 */
module.exports.allPosts = async function(request, result) {
    try {
        const postResults = await database.getInstance.performQuery(queries.GET_ALL_POSTS);
        result.json(postResults);
    } catch (error) {
        console.log(error);
        result.sendStatus(500);
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
        const postResult = await database.getInstance.performQuery(queries.GET_POST, [postUrl]);

        if (postResult.length === 0) {
            result.sendStatus(404);
        } else {
            result.json(postResult[0]);
        }
    } catch (error) {
        console.log(error);
        result.sendStatus(500);
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
        const latestPost = await database.getInstance.performQuery(queries.GET_LATEST_POST);

        if (latestPost.length === 0) {
            // Send empty object if there is no latest post yet!
            result.json({});
        } else {
            result.json(latestPost[0]);
        }
    } catch (error) {
        console.log(error);
        result.sendStatus(500);
    }
};