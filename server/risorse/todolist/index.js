var express = require('express');
var router = express.Router();
var Todos = require('./todo.controller.js');

//creo il todo
router.post('/', Todos.createTodo);

// prendi tutti i todos
router.get('/', Todos.getTodos);

// cancella un todo
router.delete('/', Todos.deleteTodo);

module.exports = router;