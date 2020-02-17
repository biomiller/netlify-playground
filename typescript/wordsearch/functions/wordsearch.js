"use strict";
var fs = require('fs');
exports.handler = function (event, context, callback) {
    var wordArray = fs.readFileSync('./node_modules/word-list/words.txt', 'utf8').split('\n');
    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var rows = [];
    var wordsFound = [];
    var string_length = 30;
    for (var n = 0; n < 10; n++) {
        var randomString = '';
        for (var i = 0; i < string_length; i++) {
            var rnum = Math.floor(Math.random() * alphabet.length);
            randomString += alphabet[rnum];
        }
        rows.push(randomString);
    }
    var word;
    var row;
    for (var _i = 0, wordArray_1 = wordArray; _i < wordArray_1.length; _i++) {
        word = wordArray_1[_i];
        for (var _a = 0, rows_1 = rows; _a < rows_1.length; _a++) {
            row = rows_1[_a];
            if (row.includes(word)) {
                wordsFound.push(word);
            }
        }
    }
    ;
    var response = { rows: rows, wordsFound: wordsFound };
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
    });
};
