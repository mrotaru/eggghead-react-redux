let AddTodo = ({ dispatch }) => {
  let input = null
  return (
    <div>
      <input ref={(node) => {
        input = node
      }} />
      <button onClick={() => {
        dispatch(addTodo(input.value))
        input.value = ''
      }}>Add</button>
    </div>
  )
}

AddTodo = ReactRedux.connect()(AddTodo)
