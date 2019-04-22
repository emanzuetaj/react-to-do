import React, { Component } from 'react';
import TodoItem from '../components/todoItem';

class List extends Component {
  render() {
    const todos = this.props.todos;
    return (
        <ul className="list">
            {todos.map(todo => 
                <TodoItem key={todo.id} removeItemHandler={this.props.removeItemHandler} toggleCompleteHandler={this.props.toggleCompleteHandler} {...todo} />    
            )}
        </ul>
    );
  }
}

export default List;
