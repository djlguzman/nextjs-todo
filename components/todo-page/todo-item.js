import React, { useRef, useState, useEffect } from "react";
import { BsFillTrashFill as DeleteIcon } from "react-icons/bs";
import { FaEdit as EditIcon } from "react-icons/fa";
import classes from "./todo-item.module.css";
import { motion, usePresence } from "framer-motion";

const TodoItem = ({ todoText, onRemove, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [fieldValue, setFieldValue] = useState("");
  const inputRef = useRef();
  const [isPresent, safeToRemove] = usePresence();

  const animations = {
    layout: true,
    initial: "out",
    animate: isPresent ? "in" : "out",
    variants: {
      in: { scaleY: 1, opacity: 1 },
      out: { scaleY: 0, opacity: 0 },
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
  };

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
    <motion.li className={classes.item} {...animations}>
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
    </motion.li>
  );
};

export default TodoItem;
