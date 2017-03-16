var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin@ds133450.mlab.com:33450/todolist', function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log('database connesso');
	}
})