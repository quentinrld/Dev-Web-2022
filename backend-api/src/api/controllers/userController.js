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
};

exports.user_delete_get = function (req, res) {
    Queries.delete_user_query(req.params.id);
    res.sendStatus(200);
};

exports.user_update_post = function (req, res) {
    Queries.update_user_query(req.params.id, req.body);
    res.sendStatus(200);
}

exports.user_rights_user_update_post = function (req, res) {
    Queries.update_user_rights_query(req.params.id, req.body);
    res.sendStatus(200);
}
