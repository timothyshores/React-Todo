// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    return (
        <div className="TodoList">
            <h1>Todo List Component</h1>
            <Todo />
            <Todo />
            <Todo />
        </div>
    );
};

export default TodoList;