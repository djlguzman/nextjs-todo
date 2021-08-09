import React, { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import classes from "./todo-list.module.css";

import TodoContext from "../../store/todo-context";

import TodoItem from "./todo-item";

const TodoList = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <ul className={classes.list}>
      <AnimatePresence>
        {todoCtx.todos.map(({ id, text }) => {
          return (
            <TodoItem
              key={id}
              onRemove={() => {
                todoCtx.removeTodo(id);
              }}
              onUpdate={todoCtx.updateTodo.bind(null, id)}
              todoText={text}
            />
          );
        })}
      </AnimatePresence>
    </ul>
  );
};

export default TodoList;
