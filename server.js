const PORT = 8000
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

const API_KEY = 'sk-';

app.post('/completions', async (req, res)=>{
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: "how to use phone?"}],
            max_tokens: 50,
        })
    }
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log("Backend..........")
        console.log(data);
        res.send(data);
    }catch(error){
        console.error(error);
    }
})


app.listen(PORT, () => console.log(`My server is running on port ${PORT}` ))