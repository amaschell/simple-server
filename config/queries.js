'use strict';

// Get all posts sorted in descending order by the creation dates (i.e. latest posts first).
// If 2 or more posts have the same creation date, these posts are getting again sorted in descending order by their ids!
module.exports.GET_ALL_POSTS = 'SELECT p.id, DATE_FORMAT(p.creation, \'%d.%m.%Y\') AS date, p.title, p.url, p.abstract, ' +
                                       'CONCAT(u.first_name, \' \', u.last_name) AS author ' +
                               'FROM posts p ' +
                               'INNER JOIN users u ON p.author = u.id ' +
                               'ORDER BY p.creation DESC, p.id DESC;';


// Get the single unique post that matches the given URL slug.
// Important: The URL slug should have been escaped by the function that is using this query!
module.exports.GET_POST = 'SELECT p.id, DATE_FORMAT(p.creation, \'%d.%m.%Y\') AS date, p.title, p.url, p.abstract, ' +
                          'CONCAT(u.first_name, \' \', u.last_name) AS author, p.content ' +
                          'FROM posts p ' +
                          'INNER JOIN users u ON p.author = u.id ' +
                          'WHERE p.url = ?;';


// Gets the latest post which is the post with the latest creation date and the highest id.
module.exports.GET_LATEST_POST = 'SELECT p.id, DATE_FORMAT(p.creation, \'%d.%m.%Y\') AS date, p.title, p.url, p.abstract ' +
                                  'FROM posts p ' +
                                  'WHERE p.creation = (SELECT MAX(p2.creation) FROM posts p2) ' +
                                  'AND p.id = (SELECT MAX(p3.id) FROM posts p3);';


// Gets all authors sorted in ascending order by their ids.
module.exports.GET_ALL_USERS = 'SELECT u.id, u.first_name AS firstName, u.last_name AS lastName, u.description, ' +
                                       'u.profile_picture AS profilePicture ' +
                               'FROM users u ' +
                               'ORDER BY u.id;';


