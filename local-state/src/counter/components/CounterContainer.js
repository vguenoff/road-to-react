import React, { Component } from 'react';

import CounterPresenter from './CounterPresenter';

class Counter extends Component {
  state = {
    counter: 0,
  };

  onIncrement = () => this.setState(prevState => ({
    counter: prevState.counter + 1,
  }));

  onDecrement = () => this.setState(prevState => ({
    counter: prevState.counter - 1,
  }));

  render() {
    return (
      <CounterPresenter
        counter={this.state.counter}
        onIncrement={this.onIncrement}
        onDecrement={this.onDecrement}
      />
    );
  }
}

export default Counter;
