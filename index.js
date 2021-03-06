//REQ 1 - It should store todos array on an object

//REQ 2 - It should have a displayTodos method

//REQ 3 - It should have an addTodo method

//REQ 4 - It should have a changeTodo method

//REQ 5 - It should have a deleteTodo method

var todoList = {
  todos: [`item1`, `item2`, `item3`],
  displayTodos: function () {
    console.log(this.todos);
  },
  addTodo: function (todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function (oldTodo, newTodo) {
    this.todos.forEach((todo, index)=> {
      if (todo === oldTodo) {
        this.todos[index] = newTodo;
      }
    });
    this.displayTodos();
  },
  deleteTodo: function (deletedTodo) {
    this.todos.forEach((todo, index) => {
      if (todo === deletedTodo) {
        this.todos.splice(index, 1);
      }
    });
    this.displayTodos()
  }
}
