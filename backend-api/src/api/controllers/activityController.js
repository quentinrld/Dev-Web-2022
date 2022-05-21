const Queries = require('../services/activitiesQuery')

exports.activity_get = async function(req, res) {
    console.log("Getting all the activities...");
    res.send(await Queries.get_activities_query());
};

exports.activity_id_get = async function(req, res) {
    console.log("Getting specific activity...");
    res.send(await Queries.get_activity_query(req.params.id));
};

exports.activity_add_post = function(req, res) {
    console.log("Sending data...");
    Queries.add_activity_query(req.body);
    console.log("Data successfully passed in the database");
    res.sendStatus(200, "The activity was added to the database");
};

exports.activity_update_post = function(req, res) {
    Queries.update_activity_post(req.params.id, req.body);
    res.sendStatus(200);
};

exports.activity_delete_post = function (req, res) {
    Queries.delete_activity_query(req.params.id);
    res.sendStatus(200);
};

exports.activity_inscription_post = function(req, res) {
    console.log(req.body);
    res.sendStatus(200);
};

exports.activity_userId_get = async function (req, res) {
    res.send(await Queries.get_activities_id_query(req.params.id, res));
}
