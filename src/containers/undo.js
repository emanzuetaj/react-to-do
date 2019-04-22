import React, { Component } from 'react';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    canUndo: state.todosReducer.past.length > 0
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUndo: () => {
      document.getElementById('undo-btn').style.display = 'none';
      dispatch(UndoActionCreators.undo())
    }
  }
}

class Undo extends Component {
  componentWillReceiveProps() {
    console.log('props');
  }
  componentWillUpdate() {
    console.log('update');
  }
  render() {
    console.log('rendering');
    return (
        <div className="undo">
            <button id="undo-btn" onClick={this.props.onUndo} disabled={!this.props.canUndo}>
            Undo
            </button>
        </div>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Undo);
