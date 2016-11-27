const store = configureStore()

fetchTodos('all').then(todos => console.log(todos))

let render = () => {
  return ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  )
}

render()
