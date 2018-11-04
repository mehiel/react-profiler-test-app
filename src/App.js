import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    counter: 0
  }

  increaseCounter = () => {
    this.setState(state => ({ counter: state.counter + 1 }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1 className="App-link">
            {this.state.counter}
          </h1>
          <button onClick={this.increaseCounter}>INC</button>
        </header>
      </div>
    );
  }
}

export default App;
