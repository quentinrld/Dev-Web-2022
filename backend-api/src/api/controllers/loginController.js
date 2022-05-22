const bcrypt = require('bcrypt');
const Queries = require('../services/activitiesQuery')

const tempUserDb = [];

exports.login_post = async function(req, res) {
    console.log("Getting all the activities...");
    res.send(await Queries.get_activities_query());
};

module.exports = tempUserDb;
