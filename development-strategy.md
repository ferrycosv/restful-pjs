# RESTFUL-PJS: development strategy

---

## 0. Setup

- copied all content of previous project `practical javascript` and made sure it runs ok from the `/public` folder.

---

## 1. User Story: `Add todo`

- The existing functionality must be refactored to fetch the information from a server.
- I wrote the code in `data/todoList.js` changed the `addTodo` and `displayTodos` functions to interact with the REST API server using asynchronous fetch calls and processing the result object.

---

## 2. User Story: `Change todo`

- The existing functionality must be refactored to post the object state and store it on a server.
- I wrote the code in `data/todoList.js` changed the `changeTodo` function to interact with the REST API server using asynchronous fetch calls and processing the result object, minor fix for the `displayTodos` function using the id as HTML data.
- Updated handler to process return value of async function call and perform the list update.

---

## 3. User Story: `Delete todo`

- The existing functionality must be refactored to delete the object from the server.
- I wrote the code in `data/todoList.js` changed the `deleteTodo` function to interact with the REST API server using asynchronous fetch calls and processing the result object.
- Updated handler function `deleteTodo` to process return value of async function call and perform the list update.

---

## 4. User Story: `Delete todo`

- The existing functionality must be refactored to toggle all or a single task completed from the data stored on the server.
- I wrote the code in `data/todoList.js` changed the `toggleCompleted` and `toggleAll` functions to interact with the REST API server using asynchronous fetch calls and processing the result object.
- Updated handler function `toggleTodo` and `toggleAll` to process the return value of the async function call and re-render the list on screen.