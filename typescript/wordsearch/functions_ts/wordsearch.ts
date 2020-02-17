const fs = require('fs');

exports.handler = function (event: any, context: any, callback: any) {

    const wordArray: string[] = fs.readFileSync('./node_modules/word-list/words.txt', 'utf8').split('\n');

    const alphabet: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let rows: string[] = [];
    let wordsFound: string[] = [];
    let string_length: number = 30;

    interface response {
        rows: string[];
        wordsFound: string[];
    }

    for (let n = 0; n < 10; n++) {
        let randomString: string = '';

        for (let i = 0; i < string_length; i++) {
            let rnum: number = Math.floor(Math.random() * alphabet.length);
            randomString += alphabet[rnum];
        }

        rows.push(randomString);
    }

    let word: string;
    let row: string;

    for (word of wordArray) {
        for (row of rows) {
            if (row.includes(word)) { 
                wordsFound.push(word) 
            }
        }
    };

    let response: response = { rows: rows, wordsFound: wordsFound }

    callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
    });
};
