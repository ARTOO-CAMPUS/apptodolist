var path = require('path');
var bodyparser = require('body-parser');
module.exports = function (app, express) {

	app.use(bodyparser.json());

	app.use('/bootstrap', express.static(path.join(__dirname, "..", "..", "node_modules", "bootstrap", "dist")));
	app.use('/font-awesome', express.static(path.join(__dirname, "..", "..", "node_modules", "font-awesome")));

	//JQUERY
	app.use('/jquery', express.static(path.join(__dirname, "..", "..", "node_modules", "jquery", "dist")));

	//ANGULAR
	app.use('/angular', express.static(path.join(__dirname, "..", "..", "node_modules", "angular")));

	//ANGULAR-UI-ROUTER
	app.use('/angular-ui-router', express.static(path.join(__dirname, "..", "..", "node_modules", "angular-ui-router")));

	//ANGULAR-UI-ROUTER
	app.use('/angular-animate', express.static(path.join(__dirname, "..", "..", "node_modules", "angular-animate")));
	//ANGULAR-UI-ROUTER
	app.use('/angular-aria', express.static(path.join(__dirname, "..", "..", "node_modules", "angular-aria")));
	//ANGULAR-UI-ROUTER
	app.use('/angular-material', express.static(path.join(__dirname, "..", "..", "node_modules", "angular-material")));
	// app.use('/date', express.static(path.join(__dirname, "..", "..", "node_modules", "ng-material-datetimepicker")));
	// app.use('/moment', express.static(path.join(__dirname, "..", "..", "node_modules", "moment", "min")));

	//JS
	app.use('/js', express.static(path.join(__dirname, "..", "..", "client", "js")));

	//CSS
	app.use('/css', express.static(path.join(__dirname, "..", "..", "client", "css")));

	//CLIENT
	app.use('/', express.static(path.join(__dirname, "..", "..", "client")));

	//ROTTA INDEX
	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, "..", "..", "client", "index.html"));
	});
	//rotta per le todolist
	app.use('/api/todolist', require('./../risorse/todolist'));

};