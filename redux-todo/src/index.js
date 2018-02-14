import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';

import './index.css';

// action types
const actions = {
  addTodo: 'ADD_TODO',
  toggleTodo: 'TOGGLE_TODO',
  filterSet: 'FILTER_SET',
};

// todo reducer
const applyAddTodo = (state, action) =>
  [...state, { ...action.payload, completed: false }];

const applyToggleTodo = (state, action) =>
  state.map(todo =>
    (todo.id === action.payload.id
      ? { ...todo, completed: !todo.completed }
      : todo),
  );

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case actions.addTodo:
      return applyAddTodo(state, action);
    case actions.toggleTodo:
      return applyToggleTodo(state, action);
    default:
      return state;
  }
};

// filter reducer
const filterReducer = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case actions.filterSet:
      return action.payload;
    default:
      return state;
  }
};

// root reducer
const rootReducer = combineReducers({
  todoReducer,
  filterReducer,
});

// creating a store
const store = createStore(rootReducer);
console.log('-----------------initial state-----------------');
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('store update / current state:');
  console.log(store.getState());
});

// action creators
const doAddTodo = (id, name) => ({
  type: actions.addTodo,
  payload: { id, name },
});

const doToggleTodo = id => ({
  type: actions.toggleTodo,
  payload: { id },
});

const doSetFilter = filter => ({
  type: actions.filterSet,
  payload: filter,
});

// dispatching actions (action creators)
store.dispatch(doAddTodo(0, 'learn react'));
store.dispatch(doAddTodo(1, 'learn mobx'));
store.dispatch(doToggleTodo(0));
store.dispatch(doSetFilter('COMPLETED'));

unsubscribe();

// view layer
const TodoApp = () => <div>Todo App</div>;

ReactDOM.render(<TodoApp />, document.getElementById('root'));
