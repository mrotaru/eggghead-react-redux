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

const store = configureStore()

let render = () => {
  return ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  )
}

render()
