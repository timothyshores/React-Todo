// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = props => {
    return (
        <div className="TodoList">
            <h1>Todo List: MVP</h1>
            <Todo todo={props.todos[0]} />
            <Todo todo={props.todos[1]} />
            <Todo todo={props.todos[2]} />
        </div>
    );
};

export default TodoList;