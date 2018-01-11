import React from 'react';

const CounterPresenter = ({
  counter,
  onIncrement,
  onDecrement
}) => (
  <div>
    <p>{counter}</p>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

export default CounterPresenter;
