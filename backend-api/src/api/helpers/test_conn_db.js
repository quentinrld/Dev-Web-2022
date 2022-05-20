let mysql = require('mysql2');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hi2azOv!!",
    database: "asbl_extr_aime"
});

con.connect(function (err){
    if (err) throw err;
    console.log("Connected !");
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM activity", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});