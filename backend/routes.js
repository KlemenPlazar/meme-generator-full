const express = require('express');
const userController = require('./controllers/user');
const memeControler = require('./controllers/meme');

const router = express.Router();

module.exports = function routes(app) {
	router.use('/user', userController);
	router.use('/memes', memeControler);
		
	app.get('/api', (req, res) => res.status(200).send({ message: 'API works.' }));
  app.use('/api', router);
};