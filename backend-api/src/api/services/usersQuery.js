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
    let columns = "userID, userName, userLastName, mailAdd, addressID, rue, numero, codepost, droitName";
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
    let columns = 'userID, userName, userLastName, mailAdd, rue, numero, codepost, droitName';
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
exports.add_user_query = function(data) {
    data.codepost = Number(data.codepost);
    data.villenom = String(data.villenom);
    let sql_ville = `INSERT INTO ville (codepost, villenom) VALUES (${data.codepost}, '${data.villenom}')`;
    con.query(sql_ville, function (err, result, fields) {
        if (err) throw err;
    });
    data.rue = String(data.rue);
    data.numero = Number(data.numero);
    let sql_address = `INSERT INTO address (rue, numero, codepost) VALUES ('${data.rue}', ${data.numero}, ${data.codepost})`;
    con.query(sql_address, function (err, result, fields) {
        if (err) throw err;
    });
    data.userName = String(data.userName);
    data.userLastName = String(data.userLastName);
    data.mailAdd = String(data.mailAdd);
    data.password = String(data.password);
    data.droitID = Number(data.droitID);
    let sql_addressID = `SELECT addressID FROM address WHERE rue = '${data.rue}' AND numero = ${data.numero} AND codepost = ${data.codepost}`;
    con.query(sql_addressID, function (err, result, fields) {
        if (err) throw err;
        result[0].addressID = Number(result[0].addressID);
        let sql_add_user = `INSERT INTO user (userName, userLastName, mailAdd, password, addressID, droitID) 
            VALUES ('${data.userName}', '${data.userLastName}', '${data.mailAdd}', '${data.password}', ${result[0].addressID}, ${data.droitID})`;
        con.query(sql_add_user, function (err, result, fields) {
            if (err) throw err;
        });
    });
};

// Delete a specific user
exports.delete_user_query = function(id) {
    let sql_addressID = `SELECT addressID FROM user WHERE userID = '${id}'`;
    con.query(sql_addressID, function (err, result, fields) {
        if (err) throw err;
        result[0].addressID = Number(result[0].addressID);
        let sql_delete_user = `DELETE FROM address WHERE addressID = ${result[0].addressID}`;
        con.query(sql_delete_user, function (err, result, fields) {
            if (err) throw err;
        });
    });
    let sql_delete_user = `DELETE FROM user WHERE userID = '${id}'`;
    con.query(sql_delete_user, function (err, result) {
        if (err) throw err;
    });
};

// Update a specific user with the data passed
exports.update_user_query = function (id, data) {
    data.codepost = Number(data.codepost);
    data.oldCodepost = Number(data.oldCodepost);
    data.villenom = String(data.villenom);
    let sql_ville = `UPDATE ville SET codepost = ${data.codepost}, villenom = '${data.villenom}' WHERE codepost = ${data.oldCodepost}`;
    con.query(sql_ville, function (err, result, fields) {
        if (err) throw err;
    });

    data.addressID = Number(data.addressID);
    data.rue = String(data.rue);
    data.numero = String(data.numero);
    let sql_update_address = `UPDATE address 
        SET rue = '${data.rue}', numero = ${data.numero} WHERE addressID = ${data.addressID}`;
    con.query(sql_update_address, function (err, result) {
        if (err) throw err;
    });

    data.userName = String(data.userName);
    data.userLastName = String(data.userLastName);
    data.password = String(data.password);
    data.mailAdd = String(data.mailAdd);
    let sql = `UPDATE user 
        SET userName = '${data.userName}', userLastName = '${data.userLastName}', password = '${data.password}', 
        mailAdd = '${data.mailAdd}' WHERE userID = '${id}'`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record updated");
    });
}

exports.update_user_rights_query = function (id, data) {
    data.droitID = Number(data.droitID);
    let sql = `UPDATE user SET droitID = ${data.droitID}`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("rights updated");
    });
}
