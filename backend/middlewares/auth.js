const users = require('../models/user');

const auth = (req, res, next) => {
	const {token} = req.headers;
	const user = users.getUser(token)

	if(user) {
		next();
	} else {
		return res.status(401).send('Invalid token in header');
	}
}

module.exports = auth