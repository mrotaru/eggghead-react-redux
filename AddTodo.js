class AddTodo extends React.Component {
  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }
  componentWillUnmount () {
    this.unsubscribe()
  }
  render () {
    let input = null
    return (
      <div>
        <input ref={(node) => {
          input = node
        }} />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: input.value,
            id: id++
          })
          input.value = ''
        }}>Add</button>
      </div>
    )
  }
}
