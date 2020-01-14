import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchBar from "../search-bar";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import "./app.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todoData: [
        { label: "Drink Coffee", important: false, id: 1 },
        { label: "Make Awesome App", important: true, id: 2 },
        { label: "Have a lunch", important: false, id: 3 }
      ]
    }

    this.deleteItem = (id) => {

      this.setState( ({ todoData }) => {
        //индекс удаляемого элемента в массиве todoData
        const idx = todoData.findIndex((el) => el.id === id);

        const before = todoData.slice(0, idx);
        const after = todoData.slice(idx + 1);
      
        return  {
          todoData: [
            ...before,
            ...after
          ]
        }
      } )
    }
  }

  render() {
    return (
      <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchBar />
        <ItemStatusFilter />
      </div>

      <TodoList todos={this.state.todoData} 
      onDeleteItem={this.deleteItem} />
    </div>
    );
  }
}

