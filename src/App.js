import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
    {
        task: 'Create a Todo List App using React.js',
        id: 1,
        completed: false,
    },
    {
        task: 'Push code to GitHub repo',
        id: 2,
        completed: false,
    },
    {
        task: 'Fill out Air-Tables report before stand up',
        id: 3,
        completed: false,
    },
];

class App extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
        super();
        // state === data (what our data looks like at any given point... what
        // is the "state" of my data right now)
        // this state object is the "brain" of the component tree
        // this is NOT muttable - we will change "state" following immutability principles
        this.state = {
            toDoList: todos,
            task: '',
            id: '',
            completed: false,
        };
    }

    render() {
        return (
            <div className="app">
                <TodoList todos={this.state.toDoList} />
                <TodoForm />
            </div>
        );
    }
}

export default App;
