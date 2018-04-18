'use strict';

const database = require('../config/database');
const queries = require('../config/queries');

module.exports.allPosts = async function(request, result) {
    try {
        const postResults = await database.getInstance.performQuery(queries.GET_ALL_POSTS);
        result.json(postResults);
    } catch (error) {
        console.log(error);
        result.sendStatus(500);
    }
};

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