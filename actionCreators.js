const addTodo = (text) => ({
  type: 'ADD_TODO',
  text,
  id: uuid.v4()
})

const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
})

const actions = { addTodo, toggleTodo, receiveTodos }
