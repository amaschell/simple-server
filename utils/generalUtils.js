'use strict';

/**
 * Helper function to determine if a string value is really non-empty. Only whitespace strings
 * are also regarded as empty.
 *
 * @param stringToEvaluate The string value to test.
 * @returns {boolean} True if the string is empty. False otherwise.
 */
module.exports.isNonEmptyString = function(stringToEvaluate) {
    return stringToEvaluate.replace(/\s/g, '').length !== 0;
};