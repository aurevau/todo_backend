const TodoModel = require('../model/todo.model');

class ToDoServices {

    static async createTodo(userId, title, description) {
        const createTodo = new TodoModel({userId, title, description});
        return await createTodo.save();
    }
}

module.exports = ToDoServices;