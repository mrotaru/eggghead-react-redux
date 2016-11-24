const AddTodo = (props, { store }) => {
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

AddTodo.contextTypes = {
  store: React.PropTypes.object
}
