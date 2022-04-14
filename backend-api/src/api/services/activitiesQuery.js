const Activities = require('../helpers/fictionalDatabase')

// Get all activities and info in the db
exports.get_activities_query = function() {
    return Activities.activities;
};

// Add an activity in the db with info
exports.add_activity_query = function(data) {
    Activities.activities.push(data);
};
