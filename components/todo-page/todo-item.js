import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { BsFillTrashFill as DeleteIcon } from "react-icons/bs";
import { FaEdit as EditIcon } from "react-icons/fa";
import classes from "./todo-item.module.css";

const TodoItem = ({ todoText, onRemove, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [fieldValue, setFieldValue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const editHandler = () => {
    if (isEditing) {
      onUpdate(fieldValue);
    } else {
      setFieldValue(todoText);
    }
    setIsEditing(!isEditing);
  };

  const changeHandler = (e) => {
    setFieldValue(e.target.value);
  };

  return (
    <li className={classes.item}>
      {isEditing && (
        <input
          ref={inputRef}
          onChange={changeHandler}
          value={fieldValue}
        ></input>
      )}
      {!isEditing && <span>{todoText}</span>}
      <div className={classes.actions}>
        <EditIcon className={classes.icons} onClick={editHandler} />
        {!isEditing && (
          <DeleteIcon className={classes.icons} onClick={onRemove} />
        )}
      </div>
    </li>
  );
};

export default TodoItem;

// const Item = styled.li`
//   word-break: break-all;
//   list-style: none;
//   text-align: start;
//   background-image: linear-gradient(
//     135deg,
//     hsla(0, 0%, 100%, 0.6),
//     hsla(0, 0%, 100%, 0.1)
//   );
//   color: #18171d;
//   padding: 10px;
//   margin: 5px;
//   border-radius: 6px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const EditField = styled.input``;

// const IconsContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const EditIcon = styled(FaEdit)`
//   font-size: 1.5rem;
//   cursor: pointer;
//   color: #e8e4c9;
//   margin-left: 10px;
// `;

// const DeleteIcon = styled(BsFillTrashFill)`
//   font-size: 1.5rem;
//   cursor: pointer;
//   color: #e8e4c9;
//   margin-left: 10px;
// `;
