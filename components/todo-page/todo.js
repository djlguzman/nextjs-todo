import React from "react";
import classes from "./todo.module.css";
import TodoForm from "./todo-form";
import TodoList from "./todo-list";

const Todo = () => {
  return (
    <div className={classes.todo}>
      <h1>To-do List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;
