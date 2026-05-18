import {OpenAI} from "openai"; // package.json type module
// else    // const OpenAI  = require("openai");

import "dotenv/config";
//require('dotenv').config()




const client = new OpenAI({
    apiKey : process.env.apiKey
})

const respo = async function callOpenAI(input) {
    return await client.responses.create({
        model:"gpt-4.1-mini",
        input :"Hi tell me more about open AI"
    })
}

const response = await respo("HI")

console.log(response.output_text)