const store = configureStore()

let render = () => {
  return ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  )
}

render()
