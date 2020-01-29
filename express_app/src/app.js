const express = require("express");
const bodyParser = require('body-parser')
const serverless = require("serverless-http");

const app = express();
app.use(bodyParser.json())
const router = express.Router();

router.post('/calculator', (req, res) => {
    const no1 = req.body.No1;
    const no2 = req.body.No2;
    const operator = req.body.operator;

    const result = calculator(no1, no2, operator);
    res.json(result);
})

function calculator(No1, No2, operator){
    if (operator == "+"){
    return +No1 + +No2;
    }
    else if (operator == "-"){
        return +No1 - +No2;
    }
    else if (operator == "*"){
        return +No1 * +No2;
    }
    else if (operator == "/"){
        return +No1 / +No2;
    }
    else {
        return "Something went wrong";
    }
}

app.use('/.netlify/functions/app', router); 

module.exports = app;
module.exports.handler = serverless(app);