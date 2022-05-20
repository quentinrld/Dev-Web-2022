const express = require('express');
const cors = require('cors');

const app = express();

const indexRouter = require('./api/routes/index')
const activitiesRouter = require('./api/routes/activities')
const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200, // For legacy browser support
};

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', indexRouter);
app.use('/activities', activitiesRouter);

app.use(cors({
    origin: 'http://localhost:8080'
}));

// Port listening
app.listen(process.env.PORT || 3000, () => console.log('App is available on http://localhost:3000'));
