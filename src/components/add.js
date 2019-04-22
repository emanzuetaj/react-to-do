import React, { Component } from 'react';

let itemId = 0;
class Add extends Component {
  add = (event) => {
    event.preventDefault();
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
        <form>
          <input placeholder="Title of your to-do task" ref={node => { this.input = node; }} />
          <button type="submit" onClick={this.add}>Add</button>
        </form>
      </div>
    );
  }
}

export default Add;
