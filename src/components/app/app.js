import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchBar from "../search-bar";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../addItem";
import "./app.css";

export default class App extends Component {

  

  constructor() {
    super();

    let idCounter = 1;

    const createItem = (label) => {
      return {
        label,
        important: false,
        id: idCounter++
      }
    }

    this.state = {
      todoData: [
        createItem("Drink Coffee"),
        createItem("Eat Egg"),
        createItem("Make Awesome App")
      ]
    };

    

    this.deleteItem = id => {
      this.setState(({ todoData }) => {
        //индекс удаляемого элемента в массиве todoData
        const idx = todoData.findIndex(el => el.id === id);

        const before = todoData.slice(0, idx);
        const after = todoData.slice(idx + 1);

        return {
          todoData: [...before, ...after]
        };
      });
    };

    this.addItem = () => {
      this.setState(({ todoData }) => {
        return {
          todoData: [
            ...todoData,
            createItem('Hi')
          ]
        }
      });
    };
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchBar />
          <ItemStatusFilter />
        </div>

        <TodoList todos={this.state.todoData} onDeleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}
