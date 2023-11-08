const jwt = require('jsonwebtoken')
const User = require('../models/user');

const authenticate = (req, res, next) => {
    try {
        const token = req.header('Authorization');

        const user = jwt.verify(token, process.env.TOKEN_SECRET);

        User.findOne({ _id: user.userId })
            .then((user) => {
                req.user = user;
                next();
            })
            .catch((err) => {
                console.error(err);
                throw new Error(err);
            });
    } catch (err) {
        console.error(err);
        return res.status(401).json({ success: false });
    }
}

module.exports = { authenticate }