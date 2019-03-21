import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
    {
        task: 'Create a Todo List App using React.js',
        id: 0,
        completed: false,
    },
    {
        task: 'Push code to GitHub repo',
        id: 1,
        completed: false,
    },
    {
        task: 'Fill out Air-Tables report before stand up',
        id: 2,
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
            newTask: '',
            id: '',
            completed: false,
        };
    }

    handleChanges = event => {
        console.log('state ', this.state);
        // update the name property on state
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    updateList = event => {
        event.preventDefault();
        console.log('updateList');
        const newTodo = {
            task: this.state.newTask,
            id: this.state.toDoList.length,
            completed: false,
        };
        console.log('newTodo', newTodo);
        console.log('spread operator', [...this.state.toDoList, newTodo]);
        this.setState({
            toDoList: [...this.state.toDoList, newTodo],
            newTask: ''
        });
    };


    render() {
        return (
            <div className="app">
                <TodoList todos={this.state.toDoList} />
                <TodoForm
                    task={this.state.task}
                    handleChanges={this.handleChanges}
                    updateList={this.updateList}
                />
            </div>
        );
    }
}

export default App;
