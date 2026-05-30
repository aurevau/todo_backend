const router = require('express').Router(); 
const TodoController = require('../controller/todo.controller');

router.post('/storeTodo', TodoController.createTodo);
router.get('/getUserTodoList', TodoController.getUserTodos);

router.delete('/todos/:id', TodoController.deleteTodo);


module.exports = router; 