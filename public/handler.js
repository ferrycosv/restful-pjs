var handler = {
  addTodo: function (event) {
    if (event.keyCode === 13 && event.target.value !== "") {
      todoList.addTodo(event.target.value).then((res) => {
        event.target.value = "";
        todoList.displayTodos();
        // log the user input
        log.push({
          handler: "addTodo",
          todoList: JSON.parse(JSON.stringify(res)),
        });
      });
    }
  },
  /*changeTodo: function (event) {
    if (event.keyCode === 13 &&  event.target.value !== "") {
      const position = Number(event.target.getAttribute("data-position"));
      todoList.changeTodo(position, event.target.value).then((res) => {
        todoList.displayTodos();
        // log the user input
        log.push({
          handler: "changeTodo",
          todoList: JSON.parse(JSON.stringify(res)),
        });
      });
    }
  },*/
  saveChanges: function (event) {
    if (confirm("Do you want to save changes?") && event.target.value !== "") {
      const position = Number(event.target.getAttribute("data-position"));
      todoList.changeTodo(position, event.target.value).then((res) => {
        todoList.displayTodos();
        // log the user input
        log.push({
          handler: "changeTodo",
          todoList: JSON.parse(JSON.stringify(res)),
        });
      });
    } else {
      todoList.displayTodos();
    }
  },
  deleteTodo: function (event) {
    if (confirm("Do you want to delete the task?")) {
      const position = Number(event.target.getAttribute("data-position"));
      todoList.deleteTodo(position).then((res) => {
        todoList.displayTodos();
        // log the user input
        log.push({
          handler: "deleteTodo",
          todoList: JSON.parse(JSON.stringify(res)),
        });
      });
    }
  },
  toggleTodo: function (event) {
    const position = Number(event.target.getAttribute("data-position"));
    todoList.toggleCompleted(position);
    todoList.displayTodos();
    // log the user input
    log.push({
      handler: "toggleTodo",
      todoList: JSON.parse(JSON.stringify(todoList)),
    });
  },
  toggleAll: function () {
    todoList.toggleAll();
    todoList.displayTodos();
    // log the user input
    log.push({
      handler: "toggleAll",
      todoList: JSON.parse(JSON.stringify(todoList)),
    });
  },
};
