const express = require('express');
const router = express.Router();

// Require controller modules
const activity_controller = require('../controllers/activityController');

/// ACTIVITIES ROUTES ///

// GET home page
router.get('/', activity_controller.activity_get);

// GET activities
router.get('/:id', activity_controller.activity_id_get);

// POST activities
router.post('/update/:id', activity_controller.activity_update_post);

// POST add an activity
router.post('/add', activity_controller.activity_add_post);

// POST inscription to an activity
router.post('/inscription', activity_controller.activity_inscription_post);

module.exports = router;
