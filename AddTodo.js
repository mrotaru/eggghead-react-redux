let AddTodo = ({ dispatch }) => {
  let input = null
  return (
    <div>
      <input ref={(node) => {
        input = node
      }} />
      <button onClick={() => {
        dispatch({
          type: 'ADD_TODO',
          text: input.value,
          id: id++
        })
        input.value = ''
      }}>Add</button>
    </div>
  )
}

AddTodo = ReactRedux.connect()(AddTodo)
