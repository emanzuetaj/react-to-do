import React, { Component } from 'react';
class TodoItem extends Component {
  remove = (event) => {
    this.props.removeItemHandler(this.props);
  };
  toggleComplete = (event) => {
    this.props.toggleCompleteHandler(this.props);
  };
  render() {
    return (
        <div className="list-item">
          <div>
            <input type="checkbox" checked={this.props.completed} onChange={this.toggleComplete} />
            <span className={this.props.completed ? 'strike-text' : ''}>{this.props.name}</span>
            <button className="danger-btn" onClick={this.remove}>delete</button>
          </div>
        </div>
    );
  }
}

export default TodoItem;
