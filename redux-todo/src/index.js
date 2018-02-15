import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { createLogger } from 'redux-logger';

import './index.css';

const actions = {
  addTodo: 'ADD_TODO',
  toggleTodo: 'TOGGLE_TODO',
  // filterSet: 'FILTER_SET',
};

const todos = [
  { id: 0, name: 'learn redux' },
  { id: 1, name: 'learn mobx' },
];

// todo reducer
const applyAddTodo = (state, action) =>
  [...state, { ...action.payload, completed: false }];

const applyToggleTodo = (state, action) =>
  state.map(todo =>
    (todo.id === action.payload.id
      ? { ...todo, completed: !todo.completed }
      : todo));

const todoReducer = (state = todos, action) => {
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
// const filterReducer = (state = 'SHOW_ALL', action) => {
//   switch (action.type) {
//     case actions.filterSet:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// action creators
// const doAddTodo = (id, name) => ({
//   type: actions.addTodo,
//   payload: { id, name },
// });

const doToggleTodo = id => ({
  type: actions.toggleTodo,
  payload: { id },
});

// const doSetFilter = filter => ({
//   type: actions.filterSet,
//   payload: filter,
// });

// root reducer
const rootReducer = combineReducers({
  todoReducer,
  // filterReducer,
});

// logger middleware
const logger = createLogger();

// creating a store
const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(logger),
);

// view layer
const TodoItem = ({ todo, onToggleTodo }) => {
  const { name, id, completed } = todo;

  return (
    <div>
      {name}
      <button
        type="button"
        onClick={() => onToggleTodo(id)}
      >
        {completed ? 'Incomplete' : 'Complete'}
      </button>
    </div>
  );
};

const TodoList = ({ todos }) => (
  <div>
    {
      todos.map(todo =>
        (<ConnectedTodoItem
          key={todo.id}
          todo={todo}
        />))
    }
  </div>
);

const TodoApp = () => <ConnectedTodoList />;

// connecting react and redux
const mapStateToProps = state => ({ todos: state.todoReducer });
const mapDispatchToProps = dispatch => ({ onToggleTodo: id => dispatch(doToggleTodo(id)) });

const ConnectedTodoList = connect(mapStateToProps)(TodoList);
const ConnectedTodoItem = connect(null, mapDispatchToProps)(TodoItem);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root'),
);
