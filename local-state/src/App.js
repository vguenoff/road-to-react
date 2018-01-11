import React, { Component } from 'react';
import CounterContainer from './counter/components/CounterContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterContainer />
        <hr />
      </div>
    );
  }
}

export default App;
