const express = require('express');
const router = express.Router();

// Require controller modules
const user_controller = require('../controllers/userController');

/// USERS ROUTES ///

// GET all users
router.get('/', user_controller.user_get);

// GET specific user
router.get('/:id', user_controller.user_id_get);

// POST add a new user
router.post('/add', user_controller.user_add_post);

module.exports = router;
