import React from "react";
import PropTypes from "prop-types";

TodoRender.propTypes = {
  todoList: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func,
};

TodoRender.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoRender({ todoList, onTodoClick }) {
  const handleClick = (todo) => {
    if (onTodoClick) onTodoClick(todo);
  };

  return (
    <ul>
      {todoList.length !== 0 &&
        todoList.map((todo) => (
          <li key={todo.id} onClick={() => handleClick(todo)}>
            {todo.title}
          </li>
        ))}

      {todoList.length === 0 && (
        <p style={{ color: "red" }}>
          Vui lòng thêm dữ liệu, chứ không có data lấy gì render
        </p>
      )}
    </ul>
  );
}

export default TodoRender;
