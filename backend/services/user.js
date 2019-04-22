const users = require('../models/user');
const memes = require('../models/meme')

const getUser = (req, res) => {
	const { token } = req.params
	const user = users.getUser(token)

	res.send(user)
}

const getUserAllData = (req, res) => {
	const { token } = req.params
	const user = users.getUser(token)
	const userMemes = memes.getMemesByUserId(user.id)

	res.send({ user, memes: userMemes })
}

const login = (req, res) => {
	const {username, password} = req.body;
	const user = users.login(username, password);
	if(user) {
		res.send(user);
	} else {
		res.status(401).send('Invalid username or password');
	}
}

const register = (req, res) => {
	const {username, password} = req.body;
	const {password: pw, ...user} = users.register(username, password);
	res.send(user);
}

module.exports = {
	getUser,
	getUserAllData,
	login,
	register,
}