import React, { Component } from 'react';

let itemId = 0;
class Add extends Component {
  add = (event) => {
    const newItem = {
        id: itemId++,
        name: this.input.value
    };
    this.props.add(newItem);
    this.input.value = '';
    this.input.focus();
  };
  render() {
    return (
      <div className="add">
        <input ref={node => { this.input = node; }} />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default Add;
