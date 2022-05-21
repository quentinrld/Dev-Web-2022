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

// Get all users and info in the db
exports.get_users_query = async function() {
    let columns = "userID, userName, userLastName, mailAdd, rue, numero, codepost, droitName";
    let sql = `
SELECT ${columns} FROM user 
INNER JOIN address ON user.addressID = address.addressID 
INNER JOIN droit ON user.droitID = droit.droitID`;
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

// Get a specific user
exports.get_user_query = async function(id) {
    let columns = "userID, userName, userLastName, mailAdd, rue, numero, codepost, droitName";
    let sql = `
SELECT ${columns} FROM user 
INNER JOIN address ON user.addressID = address.addressID 
INNER JOIN droit ON user.droitID = droit.droitID
WHERE userID = '${id}'`;
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

// Add a user in the db with info
exports.add_activity_query = function(data) {
    data.placeID = Number(data.placeID);
    data.sportDesc = String(data.sportDesc);
    data.sportName = String(data.sportName);
    let sql = `INSERT INTO activity (actname, actDesc, placeID) VALUES ('${data.sportName}', '${data.sportDesc}', '${data.placeID}')`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
};
