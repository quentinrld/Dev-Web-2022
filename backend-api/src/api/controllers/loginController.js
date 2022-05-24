const bcrypt = require('bcrypt');
const Queries = require('../services/loginQuery');

exports.login_post = async function(req, res) {
    const password = await Queries.post_login_query(req.body);
    if (password.length === 0) {
        return res.redirect(400, 'http://localhost:8080/Login');
    }
    try {
        if (await bcrypt.compare(req.body.password, password[0].password)) {
            res.send('Connecté');
        } else {
            res.send('Mauvais mot de passe');
        }
    } catch (err) {
        res.sendStatus(500);
    }
};
