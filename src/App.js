import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './container/counterContainer';

class App extends Component {
  render() {
    return (
      <div className="App"> 
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React-Redux Connect JS Counter
          </p>

          <Counter />
          
      </div>
    );
  }
}

export default App;
