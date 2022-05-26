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

module.exports = con;