const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();

const indexRouter = require('./api/routes/index');
const activitiesRouter = require('./api/routes/activities');
const usersRouter = require('./api/routes/users');
const registerRouter = require('./api/routes/register');
const loginRouter = require('./api/routes/login');

const sessions = [];

const corsOptions = {
    origin: 'http://localhost:8080'
};

const app = express();

app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use(flash());
// app.use(passport.initialize());
// app.use(passport.session());

// Session
const oneHour = 1000 * 60 * 60;
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessions,
    cookie: { maxAge: oneHour }
}));

// Routes
app.use('/', indexRouter);
app.use('/activities', activitiesRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

// Port listening
app.listen(process.env.PORT || 3000, () => console.log('App is available on http://localhost:3000'));
