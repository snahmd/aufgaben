import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  setDone: (id: string, newDone: boolean) => void;
}

const TodoItem = ({ todo, setDone }: TodoItemProps) => {
  const currentTodoId = todo.id;
  const handleClick = () => {
    setTodo((oldTodos) => {
      const updatedTodos = oldTodos.map((el) => {
        if (el.id === currentTodoId) {
          return { ...el, done: !todo.done };
        }
        return el;
      });
      return updatedTodos;
    });
  };
  return (
    <ul>
      <li onClick={handleClick} className={done ? "line-through" : ""}>
        {todo.title}
      </li>
    </ul>
  );
};

export default TodoItem;
