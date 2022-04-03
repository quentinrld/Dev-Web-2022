const db = require('./api/helpers/index');

const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Functions


// API routes

app.get('/products', (req, res) => {
    res.json(db.fictionalDatabase.users);
});

app.post('/testPost', async (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
    }
);

// Port listening
app.listen(process.env.PORT || 3000, () => console.log('App is available on http://localhost:3000'));
