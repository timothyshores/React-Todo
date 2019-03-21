import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <p
            onClick={() => props.toggleCompleted(props.todo.id)}
            className={`${props.todo.completed ? "completed" : ""}`}
        >
            {props.todo.task}
        </p>
    );
};

export default Todo;