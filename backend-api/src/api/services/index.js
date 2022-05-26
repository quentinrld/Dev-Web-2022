const mysql = require("mysql2");

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "frSncf4-gbdr5",
    database: "asbl-extr-aime"
});

con.connect(function (err){
    if (err) throw err;
    console.log("Connected to the database");
});

module.exports = con;