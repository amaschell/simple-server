'use strict';

const validator = require('validator');
const xssFilters = require('xss-filters');
const generalUtils = require('./generalUtils');

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

module.exports.validContactFormMailContent = function(request) {
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
            reject(validationErrors.join('\n'));
        } else {
            resolve();
        }
    });
};

