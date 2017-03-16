var path = require('path');
module.exports = function (app, express) {

	//rotta per le todolist
	app.use('/api/todolist', require('./../risorse/todolist'));

};