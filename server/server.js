var express = require('express');
var app = express();
const PORT = 3000;

// connessione al db
require('./config/database/database.js')

require('./rotte/route.js')(app, express);


// start del server
app.listen(PORT, function () {
	console.log('app start at http://localhost:' + PORT);
});