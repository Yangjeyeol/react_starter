import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class Todo extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        id: 0,
        value: '',
        todolist: []
    }    
    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }
    render() {
        const { handleChange } = this; 
        const { value } = this.state;
        return (
            <div>
                <input 
                    type="text"
                    placeholder="input todo."
                    value={value}
                    onChange={handleChange}
                />
                <TodoList />
            </div>
        );
    }
}

class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoItem />
            </div>
        );
    }
}
 
class TodoItem extends Component {
    render() {
        return (
            <div>
                This is todo item.<br/>
                <Button variant="outlined" size="small" color="primary">Click me.</Button>
            </div>
        );
    }
}

export default Todo;