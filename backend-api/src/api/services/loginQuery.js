const con = require('./index');

exports.post_login_query = function (data) {
    let sql = `SELECT password FROM user WHERE mailAdd = '${data.email}'`;
    return new Promise((resolve, reject) => {
        con.query(sql, function (err, result, fields) {
            try {
                resolve(result);
            } catch (err) {
                reject(err);
            }
        });
    });
};
