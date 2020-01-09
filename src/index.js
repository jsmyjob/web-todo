import React from "react";
import ReactDOM from "react-dom";
import AppHeader from './components/app-header';
import SearchBar from './components/search-bar';
import TodoList from './components/todo-list';

const App = () => {

    const todoData = [
        {label: 'Drink coffee', important: false},
        {label: 'Create app', important: true},
        {label: 'Buy bread'},
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

