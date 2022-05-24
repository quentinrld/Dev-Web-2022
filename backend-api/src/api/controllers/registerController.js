const bcrypt = require('bcrypt');
const user_controller = require('./userController');

exports.register_post = async function(req, res) {
    req.body.password = String(req.body.password);
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        user_controller.user_add_post(req, res);
        res.redirect('http://localhost:8080/Login');
    } catch (err) {
        console.log(err);
        res.redirect('http://localhost:8080/Signin');
    }
};
