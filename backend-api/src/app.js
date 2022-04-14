const express = require('express');
const app = express();

const indexRouter = require('./api/routes/index')
const activitiesRouter = require('./api/routes/activities')

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', indexRouter);
app.use('/activities', activitiesRouter);

// Port listening
app.listen(process.env.PORT || 3000, () => console.log('App is available on http://localhost:3000'));
