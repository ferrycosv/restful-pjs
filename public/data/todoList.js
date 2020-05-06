const todoList = {
  todos: [],
  addTodo: function(inputText) {
    this.todos.push({
      todoText: inputText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    let toggle = false;
    this.todos.forEach(element => {
      if (!element.completed) {
        toggle = true;
      }
    });
    if (toggle) {
      this.todos.forEach(element => {
        element.completed = true;
      });
    } else {
      this.todos.forEach(element => {
        element.completed = false;
      });
    }
  },
  displayTodos: function() {
    let i = 0;
    const parent = document.getElementById("todoDiv");
    const head = parent.children[0];
    parent.innerHTML = "";
    parent.appendChild(head);
    this.todos.forEach(element => {
      const listTodo = document.createElement("div");
      listTodo.className = "todolist";
      // check icon
      const checkTodo = document.createElement("i");
      if (element.completed) {
        checkTodo.className = "fa fa-check-circle";
      } else {
        checkTodo.className = "fa fa-check-circle gray";
      }
      checkTodo.setAttribute("data-position", i);
      checkTodo.setAttribute("onclick", "handler.toggleTodo(event)");
      listTodo.appendChild(checkTodo);
      // input field
      const inputTodo = document.createElement("input");
      inputTodo.type = "text";
      inputTodo.value = element.todoText;
      inputTodo.setAttribute("data-position", i);
      inputTodo.setAttribute("onkeyup", "handler.changeTodo(event)");
      inputTodo.setAttribute("onchange", "handler.saveChanges(event)");
      listTodo.appendChild(inputTodo);
      // delete icon
      const deleteTodo = document.createElement("i");
      deleteTodo.className = "fa fa-times red";
      deleteTodo.setAttribute("data-position", i);
      deleteTodo.setAttribute("onclick", "handler.deleteTodo(event)");
      listTodo.appendChild(deleteTodo);
      // append to parent
      parent.appendChild(listTodo);
      i++;
    });
  }
};
