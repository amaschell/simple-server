'use strict';

const validator = require('validator');
const xssFilters = require('xss-filters');
const generalUtils = require('./generalUtils');

/**
 * Extracts the contact form data from the incoming request object and generates the desired HTML content
 * that later gets sent to the defined receiver e-mail address. Every parameter of the request body is checked
 * against XSS vulnerabilities!
 *
 * @param request The incoming request object for the contact form.
 * @returns {string} The string representing the HTML content that should get sent as mail to the desired receiver.
 */
module.exports.createContactFormMailContent = function(request) {
    const { email, name, message, subject } = request.body;

    return (
        '<div>' +
            '<h3>A new message sent via the simple blog contact form!</h3>' +
            '<table>' +
                '<tr>' +
                    '<td><b>Name:</b></td>' +
                    `<td>${xssFilters.inHTMLData(name)}</td>` +
                '</tr>' +
                '<tr>' +
                    '<td><b>Subject:</b></td>' +
                    `<td>${xssFilters.inHTMLData(subject)}</td>` +
                '</tr>' +
                '<tr>' +
                    '<td><b>Contact:</b></td>' +
                    `<td>${xssFilters.inHTMLData(email)}</td>` +
                '</tr>' +
                '<tr>' +
                    '<td><b>Message:</b></td>' +
                    `<td>${xssFilters.inHTMLData(message)}</td>` +
                '</tr>' +
            '</table>' +
        '</div>'
    );
};

/**
 * Validates the contact form data of the incoming request by returning a promise. The promise gets resolved if
 * all required parameters are valid. Otherwise it gets rejected by using the validation errors.
 *
 * @param request The incoming request object for the contact form.
 * @returns {Promise<any>} The promise wrapper. Resolved if all fields are valid.
 *                         Rejected with the validation errors otherwise.
 */
module.exports.validContactFormMailContent = function(request) {
    // Return a promise here so that the caller can easily handle if the data is valid or not.
    return new Promise(function(resolve, reject) {
        const validationErrors = [];
        const { email, name, message, subject } = request.body;

        if (!name || !generalUtils.isNonEmptyString(name)) {
            validationErrors.push("The name can not be empty!");
        }

        if (!email || !validator.isEmail(email)) {
            validationErrors.push("Not a valid email address!");
        }

        if (!subject || !generalUtils.isNonEmptyString(subject)) {
            validationErrors.push("The subject can not be empty!");
        }

        if (!message || !generalUtils.isNonEmptyString(message)) {
            validationErrors.push("The message can not be empty!");
        }

        if (validationErrors.length > 0) {
            // Not valid, reject the promise by returning a string containing all validation errors.
            reject(validationErrors.join('\n'));
        } else {
            // The contact form data is valid.
            resolve();
        }
    });
};

