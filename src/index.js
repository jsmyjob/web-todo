import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchBar />
            <TodoList />
        </div>
    )
}

const AppHeader = () => {
    return (
        <h1>Todo App</h1>
    )
}

const SearchBar = () => {
    return (
        <input placeholder="search"/>
    )
}

const TodoList = () => {
    return (
        <ul>
            <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li>
        </ul>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

