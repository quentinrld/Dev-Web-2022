const bcrypt = require('bcrypt');

const tempUserDb = [];
exports.tempDb = tempUserDb;

exports.register_post = async function(req, res) {
    req.body.password = String(req.body.password);
    try {
        console.log(req.body.password);
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        console.log(hashedPassword);
        tempUserDb.push({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        res.redirect('http://localhost:8080/Login');
    } catch (err) {
        console.log(err);
        res.redirect('http://localhost:8080/Signin');
    }
    console.log(tempUserDb);
};
