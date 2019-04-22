import React, { Component } from 'react';
class TodoItem extends Component {
  remove = (event) => {
    this.props.removeItemHandler(this.props.id);
  };
  render() {
    return (
        <li>
          <span>{this.props.name}</span>&nbsp;<button onClick={this.remove}>delete</button>
        </li>
    );
  }
}

export default TodoItem;
