const { Schema, arrayOf } = window.normalizr

const todo = new Schema('todos')
const schema = {
  todo,
  arrayOfTodos: arrayOf(todo)
}
