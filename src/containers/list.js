import React, { Component } from 'react';
import TodoItem from '../components/todoItem';

class List extends Component {
  render() {
    const todos = this.props.todos;
    return (
        <ul>
            {todos.map(todo => 
                <TodoItem key={todo.id} {...todo} />    
            )}
        </ul>
    );
  }
}

export default List;
