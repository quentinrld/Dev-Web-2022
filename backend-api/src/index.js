const express = require('express');
const {urlencoded, json} = require("express");
const {readFile} = require('fs').promises;

const app = express();

const products = [
    {
        name: "car",
        id: 0
    },
    {
        name: "computer",
        id: 1
    },
    {
        name: "kitchen",
        id: 2
    }
];

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Functions


// API routes

app.get('/products/:id', (req, res) => {
    res.json(products.find((element) => {
        return +req.params.id === element.id; // le + pour convertir le str en number
    }))
})

app.post('/testPost', async (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
    }
)

// Port listening
app.listen(process.env.PORT || 3000, () => console.log('App is available on http://localhost:3000'));
