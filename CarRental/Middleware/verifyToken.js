const jwt = require('jsonwebtoken');
const JWT_SECRET = "SecretKey";

const verifyToken = async (req, res, next) => {
    try {
        // fetching the user from jwt token 
        const token = req.headers.token;
        if (!token) {
            return res.status(401).end("Please login before proceeding");
        }

        // Verify and decode the token
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).end(error.message);
    }
};

module.exports = verifyToken;
