const TodoModel = require('../model/todo.model');

class ToDoServices {

    static async createTodo(userId, title, description) {
        const createTodo = new TodoModel({userId, title, description});
        return await createTodo.save();
    }

     static async getTodoData(userId) {
        const todoData = await TodoModel.find({userId})
        return todoData;
    }
}

module.exports = ToDoServices;