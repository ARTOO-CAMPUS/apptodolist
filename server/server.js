var express = require('express');
var app = express();
const PORT = 3000;

var livereload = require('livereload');
var server = livereload.createServer();
server.watch(__dirname + "/../client");

// connessione al db
require('./config/database/database.js')

require('./rotte/route.js')(app, express);


// start del server
app.listen(PORT, function () {
	console.log('app start at http://localhost:' + PORT);
});