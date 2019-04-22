const memesModel = require('../models/meme')

const getMemes = (req, res) => {
	const memes = memesModel.getMemes();
	res.send(memes)
}

const getMemeById = (req, res) => {
	const { id } = req.params
	const meme = memesModel.getMemesByUserId(id);
	res.send(meme);
}

const createMeme = (req, res) => {
	const {body: meme} = req;
	memesModel.createMeme(meme);
	res.send();
}

const upvoteMeme = (req, res) => {
	const { id } = req.params
	memesModel.upvote(id);
	res.send();
}

const downvoteMeme = (req, res) => {
	const { id } = req.params
	memesModel.downvote(id);
	res.send();
}

module.exports = {
	getMemes,
	getMemeById,
	createMeme,
	upvoteMeme,
	downvoteMeme,
}