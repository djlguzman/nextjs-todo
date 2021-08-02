import React, { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import classes from "./todo-list.module.css";

import TodoContext from "../../store/todo-context";

import TodoItem from "./todo-item";

const TodoList = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <TransitionGroup component="ul" className={classes.list}>
      {todoCtx.todos.map(({ id, text }) => {
        return (
          <CSSTransition key={id} timeout={250} classNames="transition">
            <TodoItem
              onRemove={() => {
                todoCtx.removeTodo(id);
              }}
              onUpdate={todoCtx.updateTodo.bind(null, id)}
              todoText={text}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

export default TodoList;

{
  /* <TransitionGroup component={"ul"}>
      {todoCtx.todos.map(({ id, text }) => {
        return (
          <CSSTransition key={id} timeout={250} classNames="transition">
            <TodoItem
              onRemove={() => {
                todoCtx.removeTodo(id);
              }}
              onUpdate={todoCtx.updateTodo.bind(null, id)}
              todoText={text}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup> */
}
