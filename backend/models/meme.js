const database = require('../database/data');
// const knex = require('../database/index');

const getMemeIndex = (memeId) => {
	return database.memes.findIndex(m => m.id === memeId);
}

const getMemes = () => {
	return database.memes
}

const getMemeById = (memeId) => {
	return database.memes.find(m => m.id === parseInt(memeId, 10));
}

const getMemesByUserId = (userId) => {
	return database.memes.filter(m => m.authorId === userId)
}

const updateMeme = (memeId, memeData) => {
	const index = getMemeIndex(memeId);
	database.memes[index] = memeData;
	return database.memes[index];
}

const createMeme = (meme) => {
	database.memes.push(meme);
	return meme;
}

const upvote = (memeId) => {
	const meme = getMemeById(memeId);
	meme.upvotes++;
	return updateMeme(memeId, meme);
}

const downvote = (memeId) => {
	const meme = getMemeById(memeId);
	meme.upvotes--;
	return updateMeme(memeId, meme);
}

module.exports = {
	getMemes,
	getMemeById,
	getMemesByUserId,
	createMeme,
	upvote,
	downvote,
}