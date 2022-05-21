const express = require('express');
const router = express.Router();

// Require controller modules
const activity_controller = require('../controllers/activityController');

/// ACTIVITIES ROUTES ///

// GET all activities
router.get('/', activity_controller.activity_get);

// GET specific activity
router.get('/:id', activity_controller.activity_id_get);

// POST add an activity
router.post('/add', activity_controller.activity_add_post);

// POST update an activity
router.post('/update/:id', activity_controller.activity_update_post);

// GET delete an activity
router.get('/delete/:id', activity_controller.activity_delete_post);

// GET userResponsable of an activity
router.get('/:userId', activity_controller.activity_userId_get);

// POST inscription to an activity
router.post('/inscription', activity_controller.activity_inscription_post);

module.exports = router;
