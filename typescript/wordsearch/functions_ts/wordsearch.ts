const fs = require('fs');

exports.handler = function (event: any, context: any, callback: any) {

    const wordArray: string[] = fs.readFileSync('./node_modules/word-list/words.txt', 'utf8').split('\n');

    const alphabet: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let rows: string[] = [];
    let wordsFoundAcross: string[] = [];
    let wordsFoundDown: string[] = [];
    let rowLength: number = 50;
    let columnLength: number = 50;

    // Generate random rows
    for (let n = 0; n < columnLength; n++) {
        let randomString: string = '';
        for (let i = 0; i < rowLength; i++) {
            let rnum: number = Math.floor(Math.random() * alphabet.length);
            randomString += alphabet[rnum];
        }

        rows.push(randomString);
    }

    let word: string;
    let row: string;

    // Across
    for (word of wordArray) {
        for (row of rows) {
            if (row.toLowerCase().includes(word)) {
                if (!wordsFoundAcross.includes(word)) {
                    wordsFoundAcross.push(word.toUpperCase());
                }
            }
        }
    };

    // Down
    for (let n = 0; n < rowLength; n++) {
        let column: string = "";
        for (let i = 0; i < columnLength; i++) {
            column += rows[i].charAt(n);
        }
        for (word of wordArray) {
            if (column.toLowerCase().includes(word)) {
                if (!wordsFoundDown.includes(word)) {
                    wordsFoundDown.push(word.toUpperCase());
                }
            }
        };
    };

    interface response {
        rows: string[];
        wordsFound: { across: string[], down: string[] };
    }

    let response: response = { rows: rows, wordsFound: { across: wordsFoundAcross, down: wordsFoundDown } }

    callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
    });
};
