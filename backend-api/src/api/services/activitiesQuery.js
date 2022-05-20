const Activities = require('../helpers/fictionalDatabase')
const mysql = require("mysql2");

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hi2azOv!!",
    database: "asbl_extr_aime"
});

con.connect(function (err){
    if (err) throw err;
    console.log("Connected to the database");
});

// Get all activities and info in the db
exports.get_activities_query = async function() {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM activity", function (err, result, fields) {
            try {
                resolve(result);
            } catch (err) {
                reject(err);
            }
        });
    })
};

// Get a specific activity
exports.get_activity_query = async function(id) {
    let sql = `SELECT * FROM activity WHERE actID = '${id}'`
    return new Promise((resolve, reject) => {
        con.query(sql, function (err, result, fields) {
            try {
                resolve(result);
            } catch (err) {
                reject(err);
            }
        });
    })
};

// Add an activity in the db with info
exports.add_activity_query = function(data) {
    data.placeID = Number(data.placeID);
    data.sportDesc = String(data.sportDesc);
    data.sportName = String(data.sportName);
    const actName = data.sportName
    const actDesc = data.sportDesc
    const placeID = data.placeID
    let sql = `INSERT INTO activity (actname, actDesc, placeID) VALUES ('${actName}', '${actDesc}', '${placeID}')`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
};

// Delete a specific activity
exports.delete_activity_query = function(id) {
    let sql = `DELETE FROM activity WHERE actID = '${id}'`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record deleted");
    });
};
