const todoList = {
  todos: [],
  baseURL: "https://my-json-server.typicode.com/ferrycosv/restful-pjs/", 
  //Provided URL just offer functionality without persistence, no changes are saved but all the responses are valid!
  addTodo: async function (inputText) {
    try {
      const res = await fetch(this.baseURL + "todos/", {
        method: "POST",
        body: JSON.stringify({
          todoText: inputText,
          completed: false,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      //console.log("success");
      return data;
    } catch (err) {
      //console.log("error");
      return err;
    }
  },
  changeTodo: async function (position, todoText) {
    try {
      const res = await fetch(`${this.baseURL}todos/${position}`, {
        method: "PUT",
        body: JSON.stringify({
          todoText: todoText,
          completed: false,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  },
  deleteTodo: async function (position) {
    try {
      const res = await fetch(`${this.baseURL}todos/${position}`, {
        method: "DELETE",
      });
      const data = await res.json();
      //console.log("success");
      return data;
    } catch (err) {
      //console.log("error");
      return err;
    }
  },
  toggleCompleted: async function (position, value) {
    try {
      const res = await fetch(`${this.baseURL}todos/${position}`, {
        method: "PATCH",
        body: JSON.stringify({ completed: value }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      //console.log("success");
      return data;
    } catch (err) {
      //console.log("error");
      return err;
    }
  },
  toggleAll: async function () {
    try {
      const res = await fetch(this.baseURL + "todos/");
      const data = await res.json();
      let toggle = false;
      data.forEach((element) => {
        if (!element.completed) {
          toggle = true;
        }
      });
      data.forEach((element) => {
        element.completed = toggle;
      });
      return Promise.all(
        data.map(async (item) => {
          try {
            const res = await fetch(`${this.baseURL}todos/${item.id}`, {
              method: "PATCH",
              body: JSON.stringify({ completed: item.completed }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            });
            const data = await res.json();
            //console.log("success");
            return data;
          } catch (err) {
            //console.log("error");
            return err;
          }
        })
      );
    } catch (err) {
      return err;
    }
  },
  displayTodos: async function () {
    //let i = 1;
    const parent = document.getElementById("todoDiv");
    const head = parent.children[0];
    parent.innerHTML = "";
    parent.appendChild(head);
    const res = await fetch(this.baseURL + "todos/");
    const data = await res.json();
    data.forEach((element) => {
      const listTodo = document.createElement("div");
      listTodo.className = "todolist";
      // check icon
      const checkTodo = document.createElement("i");
      if (element.completed) {
        checkTodo.className = "fa fa-check-circle";
      } else {
        checkTodo.className = "fa fa-check-circle gray";
      }
      checkTodo.setAttribute("data-position", element.id);
      checkTodo.setAttribute("onclick", "handler.toggleTodo(event)");
      listTodo.appendChild(checkTodo);
      // input field
      const inputTodo = document.createElement("input");
      inputTodo.type = "text";
      inputTodo.value = element.todoText;
      inputTodo.setAttribute("data-position", element.id);
      //inputTodo.setAttribute("onkeyup", "handler.changeTodo(event)");
      inputTodo.setAttribute("onchange", "handler.saveChanges(event)");
      listTodo.appendChild(inputTodo);
      // delete icon
      const deleteTodo = document.createElement("i");
      deleteTodo.className = "fa fa-times red";
      deleteTodo.setAttribute("data-position", element.id);
      deleteTodo.setAttribute("onclick", "handler.deleteTodo(event)");
      listTodo.appendChild(deleteTodo);
      // append to parent
      parent.appendChild(listTodo);
      //i++;
    });
  },
};
