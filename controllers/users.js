'use strict';

const database = require('../config/database');
const queries = require('../config/queries');

module.exports.allUsers = async function(request, result) {
    try {
        const userResults = await database.getInstance.performQuery(queries.GET_ALL_USERS);
        result.json(userResults);
    } catch (error) {
        console.log(error);
        result.sendStatus(500);
    }
};