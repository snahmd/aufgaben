import TodoItem from "./TodoItem";
import { useState } from "react";
import { Todo } from "../types";

// const todos = [
//   {
//     title: "Die Kateze füttern",
//     done: false,
//     deleted: false,
//   },
//   {
//     title: "Den Müll rausbringen",
//     done: true,
//     deleted: false,
//   },
//   {
//     title:
//       "Sich bei der Hausverwaltung über den überfüllten Müllcontainer beschweren",
//     done: false,
//     deleted: false,
//   },
//   {
//     title: "Zum Sport gehen",
//     done: false,
//     deleted: false,
//   },
//   {
//     title: "React lernen",
//     done: false,
//     deleted: false,
//   },
// ];

interface TodoListProps {
  todos: Todo[];
  setDone: (id: string, newDone: boolean) => void;
}

// const Ordner = ["Inbox", "Deleted", "Spam"] as const;

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} setDone={setDone} />
      ))}
    </ul>
  );
};

export default TodoList;
