var path = require('path');
var bodyparser = require('body-parser');
module.exports = function (app, express) {

	app.use(bodyparser.json());

	//rotta per le todolist
	app.use('/api/todolist', require('./../risorse/todolist'));

};