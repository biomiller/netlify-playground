exports.handler = function(event: { body: string; }, context: any, callback: (arg0: null, arg1: { statusCode: number; body: string; }) => void) {

    interface sentence {
        sentence: string;
    }
    const body:sentence = JSON.parse(event.body);

    const sentence:string = body.sentence;

    const vowels: string[] = ["a", "e", "i", "o", "u"];

    let word:string;
    let letter:string;
    let index:number = 0;
    let response_string: string = "";


    for (word of sentence.split(" ")){
        
        let prefix: string[] = [];
        
        for(letter of word.split("")){
            
            if (index == 0 && vowels.includes(letter.toLowerCase())){
                response_string = response_string + word + "yay"+ " "
                break
            }
            else if (vowels.includes(letter.toLowerCase())){
                response_string = response_string + word + prefix.join("") +"ay" + " "
                break
            }
            else if (!vowels.includes(letter.toLowerCase())){
                prefix.push(letter)
                word = word.substring(1)
            }
            index += 1
        }
    };

    callback(null, {
        statusCode: 200,
        body: response_string
    });
}