const express = require('express');
const router = express.Router();
const passport = require('passport');

// Require controller modules
const register_controller = require('../controllers/loginController');

/// LOGIN ROUTES ///

// POST login
router.post('/', passport.authenticate('local', {
    successRedirect: 'http://localhost:8080/',
    successFailure: 'http://localhost:8080/Login',
    failureFlash: true
}));

module.exports = router;
