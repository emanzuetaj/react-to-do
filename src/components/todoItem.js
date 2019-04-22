import React, { Component } from 'react';
class TodoItem extends Component {
  render() {
    return (
        <li>
            {this.props.name}
        </li>
    );
  }
}

export default TodoItem;
