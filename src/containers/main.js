import React, { Component } from 'react';
import Add from '../components/add';
import List from './list';
import { connect } from 'react-redux';
import { add } from '../actions/add';
import { remove } from '../actions/remove';
import { toggleComplete } from '../actions/toggleComplete';
import { showAll } from '../actions/showAll';
import { showComplete } from '../actions/showComplete';
import { showIncomplete } from '../actions/showIncomplete';

const mapDispatchToProps = dispatch => ({
  add: (todoItem) => dispatch(add(todoItem)),
  remove: (id) => dispatch(remove(id)),
  toggleComplete: (id) => dispatch(toggleComplete(id)),
  showAll: () => dispatch(showAll()),
  showIncomplete: () => dispatch(showIncomplete()),
  showComplete: () => dispatch(showComplete())
});
const mapStateToProps = state => ({
    ...state
});
class Main extends Component {
    add = (newItem) => {
        this.props.add(newItem);
    }
    removeItemHandler = (id) => {
        this.props.remove(id);
    }
    toggleCompleteHandler = (id) => {
        this.props.toggleComplete(id);
    }
    render() {
        const todos = this.props.todosReducer;
        return (
            <div className="main">
                <Add add={this.add} />
                <div className="list">
                    <List todos={todos} removeItemHandler={this.removeItemHandler} toggleCompleteHandler={this.toggleCompleteHandler} />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
