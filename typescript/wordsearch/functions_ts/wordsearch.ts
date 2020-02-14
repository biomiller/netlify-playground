const fs = require('fs');

exports.handler = function (event: any, context: any, callback: any) {

    const wordArray: string[] = fs.readFileSync('./node_modules/word-list/words.txt', 'utf8').split('\n');

    let r: string = Math.random().toString(36).substring(2,10);

    // wordArray.slice(0,10).toString()
    
    callback(null, {
        statusCode: 200,
        body: r
    });
};
