const express = require('express');
const router = express.Router();
const passport = require('passport');

// Require controller modules
const login_controller = require('../controllers/loginController');

/// LOGIN ROUTES ///

// POST login
router.post('/', login_controller.login_post);

module.exports = router;
