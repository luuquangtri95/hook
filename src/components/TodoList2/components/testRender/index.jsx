import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./styles.scss";
TestRender.propTypes = {};

function TestRender({ todoList, onTodoClick }) {
  const handleTodoClick = (todo, index) => {
    if (onTodoClick) onTodoClick(todo, index);
  };
  return (
    <ul>
      {todoList.map((todo, index) => (
        <li
          key={todo.id}
          className={classnames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleTodoClick(todo, index)}
        >
          {todo.name}
        </li>
      ))}
    </ul>
  );
}

export default TestRender;
