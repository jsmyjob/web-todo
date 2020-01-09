import React from "react";
import ReactDOM from "react-dom";
import AppHeader from './components/app-header';
import SearchBar from './components/search-bar';
import TodoList from './components/todo-list';

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchBar />
            <TodoList />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

