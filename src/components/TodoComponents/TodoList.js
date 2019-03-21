// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log('TodoList Props', props.todos);
    return (
        <div className="TodoList">
            <h1>Todo List: MVP</h1>
            {props.todos.map((todo, index) => (
                <Todo todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;