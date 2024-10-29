import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { Todo } from "./types";

import { useState } from "react";

const initialTodos = [
  {
    id: "bsdjknlkjndasjmspapoawdspöladsw",
    title: "Die Kateze füttern",
    done: false,
    deleted: false,
  },
  {
    id: "jbcskjncldsknkjwdpaojpoq",
    title: "Den Müll rausbringen",
    done: true,
    deleted: false,
  },
  {
    id: "nklsanknasknjsghriueuiwehfow",
    title:
      "Sich bei der Hausverwaltung über den überfüllten Müllcontainer beschweren",
    done: false,
    deleted: false,
  },
  {
    id: "njndcsohijgreuzuqpjküoqw",
    title: "Zum Sport gehen",
    done: false,
    deleted: false,
  },
  {
    id: "guieziuijlknaslknalkp",
    title: "React lernen",
    done: false,
    deleted: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodo: Todo): void => {
    setTodos((oldTodos) => [...oldTodos, newTodo]);
  };

  const setDone = (id: string, newDone: boolean) => {
    setTodos((oldTodos) => {
      const updatedTodos = oldTodos.map((el) => {
        if (el.id === id) {
          return { ...el, done: newDone };
        }
        return el;
      });
      return updatedTodos;
    });
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Todo App</h1>
      <Header />
      <TodoList todos={todos} setDone={setDone} />
      <hr />
      <AddTodo addTodo={addTodo} />
    </>
  );
}

export default App;
