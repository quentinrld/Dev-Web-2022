const express = require('express');
const {urlencoded} = require("express");
const {readFile} = require('fs').promises;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Functions
async function renderMainPage() {
    return readFile(__dirname + '/main.html', 'utf-8')
}

async function renderThanksPage() {
    return readFile(__dirname + '/thanks.html', 'utf-8')
}

// API routes
app.get('/', async (request, response) => {
    response.send(await renderMainPage());
})

app.post('/formResp', async (request, response) => {
    console.log(request.body);
    response.send(await renderThanksPage());
    }
)

// Port listening
app.listen(process.env.PORT || 3000, () => console.log('App is available on http://localhost:3000'));

