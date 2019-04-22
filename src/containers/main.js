import React, { Component } from 'react';
import Add from '../components/add';
import List from './list';
import { connect } from 'react-redux';
import { add } from '../actions/add';
import { showAll } from '../actions/showAll';
import { showComplete } from '../actions/showComplete';
import { showIncomplete } from '../actions/showIncomplete';

const mapDispatchToProps = dispatch => ({
  add: (todoItem) => dispatch(add(todoItem)),
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
    render() {
        const todos = this.props.todosReducer;
        return (
            <div className="main">
                <Add add={this.add} />
                <div className="list">
                    <List todos={todos} />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
