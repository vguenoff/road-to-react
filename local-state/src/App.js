import React, { Component } from 'react';

import CounterContainer from './counter/components/CounterContainer';
import SearchableList from './searchInAList/components/SearchableList';

import './App.css';

class App extends Component {
  state = {
    list: [
      {
        id: 0,
        name: 'Jake',
      }, {
        id: 1,
        name: 'Jack',
      }, {
        id: 2,
        name: 'John',
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <CounterContainer />
        <hr />
        <SearchableList list={this.state.list} />
      </div>
    );
  }
}

export default App;
