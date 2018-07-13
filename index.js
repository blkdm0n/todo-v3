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
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i] === oldTodo) {
        this.todos[i] = newTodo;
      } 
    }
    this.displayTodos();
  },
  deleteTodo: function (deletedTodo) {
    for (let i = 0; i < todoList.todos.length; i++) {
      if (this.todos[i] === deletedTodo) {
         this.todos.splice(i, 1);
      } 
    }
    this.displayTodos()
  }
}
