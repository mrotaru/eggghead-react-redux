const AddTodo = ({ onAddClick }) => {
  let input = null
  return (
    <div>
      <input ref={(node) => {
        input = node
      }} />
      <button onClick={() => {
        onAddClick(input.value)
        input.value = ''
      }}>Add</button>
    </div>
  )
}
