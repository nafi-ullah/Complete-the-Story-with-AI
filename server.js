const PORT = 8000
const express = require('express')
const cors = require('cors')
require("dotenv").config();

const app = express()

app.use(express.json())

app.use(cors())

const API_KEY = `${process.env.API_KEY}`;

app.post('/completions', async (req, res)=>{
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: req.body.messages}],
            max_tokens: 500,
        })
    }
    console.log(req.body.messages);
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        res.send(data);
    }catch(error){
        console.error(error);
    }
})


app.listen(PORT, () => console.log(`My server is running on port ${PORT}` ))