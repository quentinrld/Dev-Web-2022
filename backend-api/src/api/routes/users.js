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

// GET delete a specific user
router.get('/delete/:id', user_controller.user_delete_get);

// POST update information of a specific user
router.post('/update/:id', user_controller.user_update_post);

// POST update right of a specific user
router.post('/rights/:id', user_controller.user_rights_user_update_post);

module.exports = router;
