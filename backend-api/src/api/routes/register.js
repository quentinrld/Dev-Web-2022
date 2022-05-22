const express = require('express');
const router = express.Router();
const passport = require('passport');

// Require controller modules
const register_controller = require('../controllers/registerController');

/// REGISTER ROUTES ///

// POST register
router.post('/', register_controller.register_post);

module.exports = router;
