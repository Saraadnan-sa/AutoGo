const jwt = require('jsonwebtoken');
const JWT_SECRET = "car_rental";

const verifyToken = async (req, res, next) => {
    try {
        // fetching the user from jwt token 
        const token = req.headers['token'];
        if (!token) {
            return res.status(401).send({error: "Please login before proceeding"});
        }

        // Verify and decode the token
        const data = jwt.verify(token, JWT_SECRET);
		console.log(data); 
        req.renter = data.renter;
        next();
    } catch (error) {
        res.status(401).end(error.message);
    }
};

module.exports = verifyToken;
