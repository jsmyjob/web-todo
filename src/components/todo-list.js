import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({ todos }) => {
  const elements = todos.map(item => {
    const { id, ...restProps } = item;
    return (
      <li key={id}>
        <TodoListItem {...restProps} />
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

export default TodoList;
