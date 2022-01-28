import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoRender from "./TodoRender";

function TodoList(props) {
  const initialState = [
    { id: 1, title: "luu quang tri" },
    { id: 2, title: "huynh cat my" },
    { id: 3, title: "nguyen thi thuy quynh" },
  ];

  const [todoList, setTodoList] = useState(initialState);

  const handleTodoClick = (todo) => {
    const newTodoList = [...todoList];
    const index = newTodoList.findIndex((value) => value.id === todo.id);

    newTodoList.splice(index, 1);

    setTodoList(newTodoList);
  };

  const handleAddNewTodo = (newValue) => {
    const newTodoList = [...todoList];
    newTodoList.push(newValue);

    setTodoList(newTodoList);
  };

  return (
    <div>
      <h1>List danh sách người yêu cũ</h1>
      <TodoForm onSubmit={handleAddNewTodo} />
      <TodoRender todoList={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default TodoList;
