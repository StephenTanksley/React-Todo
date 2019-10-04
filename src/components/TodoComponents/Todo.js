import React from 'react';

const Todo = props => {
    return(
        <div 
            onClick={props.onClick}
            className={`item${props.item.completed ? " completed" : ""}`}
        >
            <p>{props.item.name}</p>
        </div>
    )
}

export default Todo;

//un-inspired component - it doesn't do any thinking for itself.