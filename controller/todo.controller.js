const ToDoServices = require('../services/todo.services');

exports.createTodo = async (req, res, next) => {
    try {
        const {userId, title, description} = req.body;
        let todo = await ToDoServices.createTodo(userId,title,description);

        res.json({status: true, success: todo});

    } catch(error) {
        next(error);
    }
}

exports.getUserTodos = async (req, res, next) => {
    try {
        const {userId} = req.query;
        let todos = await ToDoServices.getTodoData(userId);

        res.json({status: true, success: todos});

    } catch(error) {
        next(error);
    }
}