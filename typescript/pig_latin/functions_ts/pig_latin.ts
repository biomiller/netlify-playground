export function pig_latin (event: { body: string; }, context: any, callback: any) {

    interface sentence {
        sentence: string;
    }
    const body: sentence = JSON.parse(event.body);

    const sentence: string = body.sentence;

    const vowels: string[] = ["a", "e", "i", "o", "u"];

    let word: string;
    let letter: string;
    let response_string: string = "";


    for (word of sentence.split(" ")) {
        word = word.toLowerCase();

        if (vowels.includes(word.charAt(0).toLowerCase())) {
            response_string = response_string + word + "yay" + " "
            continue
        }
        else {
            let prefix: string[] = [];
            for (letter of word.split("")) {

                if (vowels.includes(letter.toLowerCase())) {
                    response_string = response_string + word + prefix.join("") + "ay" + " "
                    break
                }
                else if (!vowels.includes(letter.toLowerCase())) {
                    prefix.push(letter)
                    word = word.substring(1)
                }
            }
        }
    };

    callback(null, {
        statusCode: 200,
        body: response_string
    });
}

exports.handler = pig_latin;

