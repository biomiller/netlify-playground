"use strict";
exports.handler = function (event, context, callback) {
    var body = JSON.parse(event.body);
    var sentence = body.sentence;
    var vowels = ["a", "e", "i", "o", "u"];
    var word;
    var letter;
    var index = 0;
    var response_string = "";
    for (var _i = 0, _a = sentence.split(" "); _i < _a.length; _i++) {
        word = _a[_i];
        var prefix = [];
        for (var _b = 0, _c = word.split(""); _b < _c.length; _b++) {
            letter = _c[_b];
            if (vowels.includes(letter.toLowerCase())) {
                response_string = response_string + word + "yay" + " ";
                break;
            }
            // else if (vowels.includes(letter.toLowerCase())){
            //     response_string = response_string + word + prefix.join("") +"ay" + " "
            //     break
            // }
            else if (!vowels.includes(letter.toLowerCase())) {
                prefix.push(letter);
                word = word.substring(1);
            }
            index += 1;
        }
    }
    ;
    callback(null, {
        statusCode: 200,
        body: response_string
    });
};
