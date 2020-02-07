"use strict";
exports.handler = function (event, context, callback) {
    var body = JSON.parse(event.body);
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(body)
    });
};
