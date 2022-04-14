//const Activities = require('../models/activities')
const Activities = require('../helpers/fictionalDatabase')
const Queries = require('../services/activitiesQuery')

exports.activity_get = function(req, res) {
    console.log("Getting all the activities...");
    res.send(Queries.get_activities_query());
    console.log("Data successfully sent");
};

exports.activity_id_get = function(req, res) {
    res.send(Activities.activities.find(activity => activity.id === Number(req.params.id)));
};

exports.activity_add_post = function(req, res) {
    console.log("Sending data...");
    Queries.add_activity_query(req.body);
    console.log("Data successfully passed in the database");
    res.sendStatus(200, "The activity was added to the database");
};

exports.activity_update_post = function(req, res) {
    console.log(req.body);
    res.sendStatus(200);
};

exports.activity_inscription_post = function(req, res) {
    console.log(req.body);
    res.sendStatus(200);
};
