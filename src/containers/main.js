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
    message = '';
    add = (newItem) => {
        if (!newItem.name) {
            this.displayMessage('Item name cannot be empty.');
            return;
        }
        this.props.add(newItem);
        this.setFilterHandler('SHOW_ALL');
        this.displayMessage(newItem.name + ' added.');
    }
    removeItemHandler = (todoItem) => {
        this.props.remove(todoItem.id);
        this.displayMessage(todoItem.name + ' removed.');
    }
    toggleCompleteHandler = (todoItem) => {
        this.props.toggleComplete(todoItem.id);
        const markedText = todoItem.completed ? 'in progress' : 'complete';
        this.displayMessage(todoItem.name + ' marked ' + markedText + '.');
    }
    setFilterHandler = (setting) => {
        this.props.setFilter(setting);
    }
    displayMessage = (message) => {
        const messageDiv = document.getElementById('message');
        messageDiv.innerHTML = message;
        messageDiv.style.display = 'block';
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 3000);
    }
    render() {
        const todos = this.props.todosReducer;
        let filteredTodos = [];
        let filterListOptions;
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
        if (todos.length > 0) {
            filterListOptions = <Filters setFilterHandler={this.setFilterHandler} currentSetting={this.props.filterReducer} />;
        }
        return (
            <div className="main">
                <Add add={this.add} />
                <div id="message"></div>
                <div className="list">
                    <List todos={filteredTodos} removeItemHandler={this.removeItemHandler} toggleCompleteHandler={this.toggleCompleteHandler} />
                </div>
                <div className="filter">
                    {filterListOptions}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
