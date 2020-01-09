import React from "react";
import ReactDOM from "react-dom";
import AppHeader from './components/app-header';
import SearchBar from './components/search-bar';
import TodoList from './components/todo-list';

const App = () => {

    const todoData = [
        {label: 'Drink coffee', important: false, id: 1},
        {label: 'Create app', important: true, id: 2},
        {label: 'Buy bread', id: 3},
    ]

    return (
        <div>
            <AppHeader />
            <SearchBar />
            <TodoList todos = {todoData} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

