const crypto = require('crypto');
const database = require('../database/data');

const SECRET = 'SCV je zakon!';

const getLatestId = () => {
	const lastUser = database.users[database.users.length - 1];
	
	return lastUser.id + 1;
}

const createHash = (value) => crypto.createHmac('sha256', SECRET)
																		.update(value)
																		.digest('hex');

const getUser = (token) => {
	return database.users.find(u => u.token === token);
}

const login = (username, password) => {
	const hash = createHash(password);

	console.log(username)
	console.log(hash)

	return database.users.find(u => u.username === username && u.password === hash);
}

const register = (username, password) => {
	const id = getLatestId();
	const hash = createHash(password);
	const token = crypto.randomBytes(16).toString('hex');
	const user = {id, username, password: hash, token};
	database.users.push(user);
	return user;
}

module.exports = {
	getUser,
	login,
	register
}