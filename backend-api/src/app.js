if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const app = express();
const cors = require('cors');
const flash = require('express-flash');
const session = require('express-session');
const passport = require('passport');

const users = require('./api/controllers/registerController').tempDb;

const initializePassport = require('./config/passport-config');
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
);

const indexRouter = require('./api/routes/index');
const activitiesRouter = require('./api/routes/activities');
const usersRouter = require('./api/routes/users');
const registerRouter = require('./api/routes/register');
const loginRouter = require('./api/routes/login');

const corsOptions = {
    origin: 'http://localhost:8080'
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
// app.use(passport.initialize());
// app.use(passport.session());

// Routes
app.use('/', indexRouter);
app.use('/activities', activitiesRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

// Port listening
app.listen(process.env.PORT || 3000, () => console.log('App is available on http://localhost:3000'));
