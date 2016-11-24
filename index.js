// const todoApp = Redux.combineReducers({
const todoApp = Redux.combineReducers({
  todos,
  visibilityFilter
})

let id = 0
const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

let render = () => {
  return ReactDOM.render(
    <Provider store={Redux.createStore(todoApp)}>
      <TodoApp />
    </Provider>,
    document.getElementById('root')
  )
}

render()
