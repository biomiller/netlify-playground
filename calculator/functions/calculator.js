exports.handler = function(event, context, callback) {
    
    body = JSON.parse(event.body);
    
    No1 = body.No1;
    No2 = body.No2;
    op = body.operator;

    if (op == "+")
    {
        result = +No1 + +No2;
    }
    else if (op == "-")
    {
        result = +No1 - +No2;
    }
    else if (op == "*")
    {
        result = +No1 * +No2;
    }
    else if (op == "/")
    {
        result = +No1 / +No2;
    }
    else if (op == "^")
    {
        result = Math.pow(+No1, +No2);
    }

    callback(null, {
        statusCode: 200,
        body: JSON.stringify(result)
    });
}