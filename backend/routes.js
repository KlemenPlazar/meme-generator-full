
module.exports = function routes(app) {
	app.get('/api', (req, res) => res.status(200).send({ message: 'API works.' }));
};