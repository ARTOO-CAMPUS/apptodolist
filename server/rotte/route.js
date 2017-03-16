var path = require('path');
var bodyparser = require('body-parser');
module.exports = function (app, express) {

	app.use(bodyparser.json());

	app.use('/bootstrap', express.static(path.join(__dirname, "..", "..", "node_modules", "bootstrap", "dist")));

	//JQUERY
	app.use('/jquery', express.static(path.join(__dirname, "..", "..", "node_modules", "jquery", "dist")));

	//ANGULAR
	app.use('/angular', express.static(path.join(__dirname, "..", "..", "node_modules", "angular")));

	//ANGULAR-UI-ROUTER
	app.use('/angular-ui-router', express.static(path.join(__dirname, "..", "..", "node_modules", "angular-ui-router")));

	//JS
	app.use('/js', express.static(path.join(__dirname, "..", "..", "client", "js")));

	//CSS
	app.use('/css', express.static(path.join(__dirname, "..", "..", "client", "css")));

	//ROTTA INDEX
	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, "..", "..", "client", "index.html"));
	});
	//rotta per le todolist
	app.use('/api/todolist', require('./../risorse/todolist'));

};