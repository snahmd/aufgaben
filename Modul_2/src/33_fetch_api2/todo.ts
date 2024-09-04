//! Aufgabe 1
interface IToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function fetchTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response: Response) => {
      return response.json();
    })
    .then((todos) => {
      todos.sort((a: any, b: any) => a.title.localeCompare(b.title));

      const todoList = document.getElementById("todo-list") as HTMLUListElement;

      todos.forEach((todo: any) => {
        const listItem = document.createElement("li");
        listItem.textContent = todo.title;

        listItem.style.color = todo.completed ? "green" : "red";

        todoList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error when retrieving the tasks:", error);
    });
}

fetchTodos();
