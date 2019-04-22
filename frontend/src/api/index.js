const axios = require('axios');

const client = axios.create({
  baseURL: 'http://localhost:5000/api/',
	timeout: 1000,
	headers: {token: localStorage.getItem('token')}
});

const getUser = async (token) => {
	try {
		const {data} = await client.get(`/user/${token}`);
		return data
	} catch(e) {
		console.log(e)
	}
}

const login = async (username, password) => {
	try {
		const {data} = await client.post('/user/login', {username, password});
		localStorage.setItem('token', data.token);
		return data
	} catch(e) {
		console.log(e)
	}
}

const register = async(username, password) => {
	try {
		const {data} = await client.post('/user/register', {username, password});
		return data
	} catch(e) {
		console.log(e)
	}
}

const getAllMemes = async () => {
	const {data} = await client.get('/memes');
	return data;
}

const createMeme = async (meme) => client.post('/memes/create', meme);

const upvote = async (memeId) => client.post(`/memes/${memeId}/upvote`);
const downvote = async (memeId) => client.post(`/memes/${memeId}/downvote`);

export default {
	login,
	register,
	getUser,
	getAllMemes,
	createMeme,
	upvote,
	downvote,
}
