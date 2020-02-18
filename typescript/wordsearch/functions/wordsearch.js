"use strict";
var fs = require('fs');
exports.handler = function (event, context, callback) {
    var wordArray = fs.readFileSync('./node_modules/word-list/words.txt', 'utf8').split('\n');
    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var rows = [];
    var wordsFoundAcross = [];
    var wordsFoundDown = [];
    var rowLength = 50;
    var columnLength = 50;
    // Generate random rows
    for (var n = 0; n < columnLength; n++) {
        var randomString = '';
        for (var i = 0; i < rowLength; i++) {
            var rnum = Math.floor(Math.random() * alphabet.length);
            randomString += alphabet[rnum];
        }
        rows.push(randomString);
    }
    var word;
    var row;
    // Across
    for (var _i = 0, wordArray_1 = wordArray; _i < wordArray_1.length; _i++) {
        word = wordArray_1[_i];
        for (var _a = 0, rows_1 = rows; _a < rows_1.length; _a++) {
            row = rows_1[_a];
            if (row.toLowerCase().includes(word)) {
                if (!wordsFoundAcross.includes(word)) {
                    wordsFoundAcross.push(word.toUpperCase());
                }
            }
        }
    }
    ;
    // Down
    for (var n = 0; n < rowLength; n++) {
        var column = "";
        for (var i = 0; i < columnLength; i++) {
            column += rows[i].charAt(n);
        }
        for (var _b = 0, wordArray_2 = wordArray; _b < wordArray_2.length; _b++) {
            word = wordArray_2[_b];
            if (column.toLowerCase().includes(word)) {
                if (!wordsFoundDown.includes(word)) {
                    wordsFoundDown.push(word.toUpperCase());
                }
            }
        }
        ;
    }
    ;
    var response = { rows: rows, wordsFound: { across: wordsFoundAcross, down: wordsFoundDown } };
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
    });
};
