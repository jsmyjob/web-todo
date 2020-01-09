import React from 'react';

const TodoListItem = ({ label, important = false }) => {

    const cssStyle = {
        color: important ? 'tomato' : 'black'
    }

    return <span style={cssStyle}> { label } </span>
}

export default TodoListItem;