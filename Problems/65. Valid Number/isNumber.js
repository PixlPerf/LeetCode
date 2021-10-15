/**
 * @param {string} s
 * @return {boolean}
 */

const REGEX = require('../../Concepts/Regex/regex');

var isNumber = function(s) {
    return REGEX.E_INTEGER.test(s);
};

module.exports = isNumber;