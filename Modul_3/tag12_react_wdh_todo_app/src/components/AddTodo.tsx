import { useRef } from "react";
import type { Todo } from "../types";

interface AddTodoProps {
  //   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  //   //   setTodos: (todos: Todo[]) => void;
  //   //   todos: Todo[];
  addTodo: (newTodo: Todo) => void;
}

const AddTodo = ({ addTodo }: AddTodoProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const value = inputRef.current?.value;
    if (!value) {
      return;
    }
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: value,
      done: false,
      deleted: false,
    };
    // const newTodos = [...todos, newTodo];
    // setTodos([newTodo]);
    // setTodos((oldTodos) => [...oldTodos, newTodo]);
    addTodo(newTodo);
  };
  return (
    <div>
      <h2>Add Todo</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-2 p-2"
      >
        <label htmlFor="addTodo">Add Todo</label>
        <input
          ref={inputRef}
          type="text"
          id="addTodo"
          className="border border-black p-2"
        />
        <button className="border border-black p-2">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
