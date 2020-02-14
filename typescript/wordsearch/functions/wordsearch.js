"use strict";
var fs = require('fs');
exports.handler = function (event, context, callback) {
    var wordArray = fs.readFileSync('./node_modules/word-list/words.txt', 'utf8').split('\n');
    var r = Math.random().toString(36).substring(2, 10);
    // wordArray.slice(0,10).toString()
    callback(null, {
        statusCode: 200,
        body: r
    });
};
