exports.handler = function(event: { body: string; }, context: any, callback: (arg0: null, arg1: { statusCode: number; body: string; }) => void) {

    const body:string = JSON.parse(event.body);

    callback(null, {
        statusCode: 200,
        body: JSON.stringify(body)
    });





}