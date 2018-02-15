// action types
const actions = {
  addTodo: 'ADD_TODO',
  toggleTodo: 'TOGGLE_TODO',
  filterSet: 'FILTER_SET',
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
const filterReducer = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case actions.filterSet:
      return action.payload;
    default:
      return state;
  }
};

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

// root reducer
const rootReducer = combineReducers({
  todoReducer,
  filterReducer,
});

// creating a store
const store = createStore(rootReducer);
console.log('-----------------initial state-----------------');
console.log(store.getState());

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

const TodoList = ({ todos, onToggleTodo }) => (
  <div>
    {
      todos.map(todo =>
        (<TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
        />))
    }
  </div>
);

const TodoApp = ({ todos, onToggleTodo }) => (
  <TodoList
    todos={todos}
    onToggleTodo={onToggleTodo}
  />
);

function render() {
  ReactDOM.render(
    <TodoApp
      todos={store.getState().todoReducer}
      onToggleTodo={id => store.dispatch(doToggleTodo(id))}
    />, document.getElementById('root'),
  );
}

store.subscribe(render);
render();
