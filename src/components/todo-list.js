import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem label='Купить хлеба'/></li>
            <li><TodoListItem label='Позвонить подрядчику' important/></li>
            <li><TodoListItem label='Сходить в магазин'/></li>
        </ul>
    )
}

export default TodoList;