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

const fetchTodos = (filter) =>
  api.fetchTodos(filter).then(response =>
    receiveTodos(filter, response)
  )

const actions = { addTodo, toggleTodo, fetchTodos }
