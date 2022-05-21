const Queries = require('../services/usersQuery')

exports.user_get = async function(req, res) {
    console.log("Getting all users...");
    res.send(await Queries.get_users_query());
};

exports.user_id_get = async function(req, res) {
    console.log("Getting specific user...");
    res.send(await Queries.get_user_query(req.params.id));
};

exports.user_add_post = function(req, res) {
    console.log("Sending data...");
    Queries.add_user_query(req.body);
    console.log("Data successfully passed in the database");
    res.sendStatus(200, "The user was added to the database");
};
