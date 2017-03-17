var mongoose = require('mongoose');
var Todos = require('./todo.model.js');
module.exports = (function () {

	var createTodo = function (req, res) {
		var nuovo = new Todos(req.body);
		nuovo.save()
			.then(function (data) {
				res.status(200).json(data);
			})
			.catch(function (err) {
				res.status(500).json(err);
			});
	}

	var getTodos = function (req, res) {
		Todos.find()
			.exec()
			.then(function (data) {
				res.status(200).json(data);
			})
			.catch(function (err) {
				res.status(500).json(err);
			});
	}

	var deleteTodo = function (req, res) {
		Todos.findByIdAndRemove(req.params.id)
			.then(function (data) {
				res.status(200).json(data);
			})
			.catch(function (err) {
				res.status(500).json(err);
			});
	}

	var updateTodo = function (req, res) {
		Todos.findByIdAndUpdate(req.params.id, req.body)
			.then(function (data) {
				res.status(200).json(data);
			})
			.catch(function (err) {
				res.status(500).json(err);
			});
	}

	return {
		getTodos: getTodos,
		deleteTodo: deleteTodo,
		createTodo: createTodo,
		updateTodo: updateTodo
	}
})();