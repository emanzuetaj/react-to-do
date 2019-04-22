import React, { Component } from 'react';
class TodoItem extends Component {
  remove = (event) => {
    this.props.removeItemHandler(this.props.id);
  };
  toggleComplete = (event) => {
    this.props.toggleCompleteHandler(this.props.id);
  };
  render() {
    const status = this.props.completed ? 'completed' : 'in progress';
    return (
        <li>
          <span>{this.props.name}</span>&nbsp;<i>({status})</i>&nbsp;<button onClick={this.remove}>delete</button>&nbsp;<button onClick={this.toggleComplete}>toggle</button>
        </li>
    );
  }
}

export default TodoItem;
