"use strict";
exports.handler = function (event, context, callback) {
    var body = JSON.parse(event.body);
    var sentence = body.sentence;
    var vowels = ["a", "e", "i", "o", "u"];
    var word;
    var letter;
    var response_string = "";
    for (var _i = 0, _a = sentence.split(" "); _i < _a.length; _i++) {
        word = _a[_i];
        word = word.toLowerCase();
        if (vowels.includes(word.charAt(0).toLowerCase())) {
            response_string = response_string + word + "yay" + " ";
            continue;
        }
        else {
            var prefix = [];
            for (var _b = 0, _c = word.split(""); _b < _c.length; _b++) {
                letter = _c[_b];
                if (vowels.includes(letter.toLowerCase())) {
                    response_string = response_string + word + prefix.join("") + "ay" + " ";
                    break;
                }
                else if (!vowels.includes(letter.toLowerCase())) {
                    prefix.push(letter);
                    word = word.substring(1);
                }
            }
        }
    }
    ;
    callback(null, {
        statusCode: 200,
        body: response_string
    });
};
