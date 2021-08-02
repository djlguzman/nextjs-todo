import { createContext, useState } from "react";

const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  updateTodo: () => {},
});

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (newTodo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const removeTodoHandler = (todoId) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== todoId);
    });
  };

  const updateTodoHandler = (todoId, newTodoText) => {
    setTodos((todos) => {
      return todos.map((todo) =>
        todo.id === todoId ? { ...todo, text: newTodoText } : todo
      );
    });
  };

  const context = {
    todos: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    updateTodo: updateTodoHandler,
  };

  return (
    <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
  );
};

export default TodoContext;
