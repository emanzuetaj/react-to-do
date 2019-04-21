import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { add } from './actions/add';

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(add())
});
const mapStateToProps = state => ({
  ...state
});
class App extends Component {
  add = (event) => {
    this.props.add();
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <button onClick={this.add}>Test add action</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
