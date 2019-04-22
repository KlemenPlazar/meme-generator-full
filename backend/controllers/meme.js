const express = require('express');
const memeService = require('../services/meme')
const auth = require('../middlewares/auth');

const memeController = express.Router();

memeController.get('/', memeService.getMemes);
memeController.get('/:id', memeService.getMemes);
memeController.post('/:id/upvote', auth, memeService.upvoteMeme);
memeController.post('/:id/downvote', auth, memeService.downvoteMeme);
memeController.post('/create', auth, memeService.createMeme);


module.exports = memeController;