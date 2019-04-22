import React, { Component } from 'react';
import Add from '../components/add';
import List from './list';
import Filters from './filters';
import { connect } from 'react-redux';
import { add } from '../actions/add';
import { remove } from '../actions/remove';
import { toggleComplete } from '../actions/toggleComplete';
import { setFilter } from '../actions/setFilter';

const mapDispatchToProps = dispatch => ({
  add: (todoItem) => dispatch(add(todoItem)),
  remove: (id) => dispatch(remove(id)),
  toggleComplete: (id) => dispatch(toggleComplete(id)),
  setFilter: (setting) => dispatch(setFilter(setting))
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
    setFilterHandler = (setting) => {
        this.props.setFilter(setting);
    }
    render() {
        const todos = this.props.todosReducer;
        let filteredTodos = [];
        switch (this.props.filterReducer) {
            case 'SHOW_COMPLETED':
                filteredTodos = todos.filter((todo) => {
                    return todo.completed;
                });
                break;
            case 'SHOW_INPROGRESS':
                filteredTodos = todos.filter((todo) => {
                    return !todo.completed;
                });
                break;
            case 'SHOW_ALL':
            default:
                filteredTodos = todos;
                break;
        }
        return (
            <div className="main">
                <Add add={this.add} />
                <div className="list">
                    <List todos={filteredTodos} removeItemHandler={this.removeItemHandler} toggleCompleteHandler={this.toggleCompleteHandler} />
                </div>
                <div className="filter">
                    <Filters setFilterHandler={this.setFilterHandler} />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
