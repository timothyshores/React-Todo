// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="TodoList">
            <h1>Todo List: MVP</h1>
            {props.todos.map((todo, index) => (
                <Todo
                    todo={todo}
                    key={index}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
        </div>
    );
};

export default TodoList;