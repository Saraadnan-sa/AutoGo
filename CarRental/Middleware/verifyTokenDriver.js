const jwt = require('jsonwebtoken');
const JWT_SECRET = "car_rental";

const verifyToken = async (req, res, next) => {
	try {
		// fetching the user from jwt token 
		console.log(req.headers);
		const token = req.headers['token'];
		if (!token) {
			return res.status(401).send({error: "Please login before proceeding"});
		}

		// Verify and decode the token
		const data = jwt.verify(token, JWT_SECRET);
		console.log(data);
		req.driver = data.driver;
		next();
	} catch (error) {
		res.status(401).end(error.message);
	}
};

module.exports = verifyToken;
