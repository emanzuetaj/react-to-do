import React, { Component } from 'react';
import Add from '../components/add';
import List from './list';
import Filters from './filters';
import { connect } from 'react-redux';
import { add } from '../actions/add';
import { remove } from '../actions/remove';
import { toggleComplete } from '../actions/toggleComplete';
import { setFilter } from '../actions/setFilter';
import Undo from './undo';

const mapDispatchToProps = dispatch => ({
  add: (todoItem) => dispatch(add(todoItem)),
  remove: (id) => dispatch(remove(id)),
  toggleComplete: (id) => dispatch(toggleComplete(id)),
  setFilter: (setting) => dispatch(setFilter(setting))
});
const mapStateToProps = state => {
    return {
        currentFilterSetting: state.filterReducer,
        todos: getFilteredTodos(state.todosReducer.present, state.filterReducer),
        lastId: typeof state.todosReducer.present[state.todosReducer.present.length - 1] === 'undefined' ? 0 : state.todosReducer.present[state.todosReducer.present.length - 1].id
    }
};
const getFilteredTodos = (todos, filterSetting) => {
    switch (filterSetting) {
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => {
                return todo.completed;
            });
        case 'SHOW_INPROGRESS':
            return todos.filter((todo) => {
                return !todo.completed;
            });
        case 'SHOW_ALL':
        default:
            return todos;
    }
}
class Main extends Component {
    add = (newItem) => {
        if (!newItem.name) {
            this.displayMessage('Item name cannot be empty.', true);
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
    displayMessage = (message, hideUndo) => {
        document.getElementById('undo-btn').style.display = hideUndo ? 'none' : 'block';
        const messageDiv = document.getElementById('message');
        const messageText = document.getElementById('message-text');
        messageText.innerHTML = message;
        messageDiv.classList.add('flex-row');
        messageDiv.classList.add('center-content');
        if (hideUndo) {
            messageDiv.classList.add('warning');
        }
        clearTimeout(this.displayMessageTimeout);
        this.displayMessageTimeout = setTimeout(() => {
            messageDiv.classList.remove('flex-row');
            messageDiv.classList.remove('center-content');
            messageDiv.classList.remove('warning');
        }, 3000);
    }
    render() {
        const filteredTodos = this.props.todos;
        return (
            <div className="main">
                <Add add={this.add} lastId={this.props.lastId} />
                <Filters setFilterHandler={this.setFilterHandler} currentSetting={this.props.currentFilterSetting} />
                <div id="message">
                    <span id="message-text"></span>
                    <Undo />
                </div>
                <List todos={filteredTodos} removeItemHandler={this.removeItemHandler} toggleCompleteHandler={this.toggleCompleteHandler} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
