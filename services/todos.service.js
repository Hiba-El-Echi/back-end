module.exports = new (class TodosService {
  constructor() {
    this.todos = require("../models/todo.model.js");
  }

  getTodos() {
    return this.todos.find({});
  }

  getTodosById({ _id }) {
    return this.todos.findById(_id);
  }

  addTodos(payload) {
    return this.todos.create(payload);
  }
  deleteTodosById({ _id }) {
    return this.todos.remove(_id);
  }
  deleteTodos(){
    return this.todos.deleteMany({})
  }
})();
