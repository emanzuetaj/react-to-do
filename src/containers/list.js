import React, { Component } from 'react';
import TodoItem from '../components/todoItem';

class List extends Component {
  render() {
    const todos = this.props.todos;
    return (
        <div className="list">
            {[...todos].reverse().map(todo => 
                <TodoItem key={todo.id} removeItemHandler={this.props.removeItemHandler} toggleCompleteHandler={this.props.toggleCompleteHandler} {...todo} />    
            )}
            {todos.length === 0 ? 'No items meet filter criteria.' : ''}
        </div>
    );
  }
}

export default List;
