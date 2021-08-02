import React, { useRef, useContext } from "react";
import styled from "styled-components";
import TodoContext from "../../store/todo-context";
import { BsFillPlusCircleFill as AddButton } from "react-icons/bs";
import classes from "./todo-form.module.css";

const TodoForm = () => {
  const todoRef = useRef();
  const todoCtx = useContext(TodoContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!todoRef.current.value) return;
    const newTodo = {
      id: Math.random(),
      text: todoRef.current.value,
    };
    todoCtx.addTodo(newTodo);
    todoRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        placeholder="Add to do"
        ref={todoRef}
        type="text"
        id="todo"
        name="todo"
      />
      <AddButton className={classes.btn} onClick={submitHandler} />
    </form>
  );
};

export default TodoForm;
