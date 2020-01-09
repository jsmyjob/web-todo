import React from "react";
import ReactDOM from "react-dom";

const TodoList = (  
    <div>
      <h1>TodoList</h1>
      <input placeholder="search" />
      <ul>
          <li>Todo 1</li>
          <li>Todo 2</li>
          <li>Todo 3</li>
      </ul>
    </div>
  );

ReactDOM.render(TodoList, document.getElementById('root'));
