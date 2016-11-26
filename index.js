const { Provider } = ReactRedux

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <hr />
    <button onClick={() => localStorage.removeItem('state')}>Clear Local Data</button>
  </div>
)

const persistedState = loadState()
const store = Redux.createStore(todoApp, persistedState)

store.subscribe(lodash.throttle(() => {
  saveState({
    todos: store.getState().todos
  })
}))

let render = () => {
  return ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    document.getElementById('root')
  )
}

render()
