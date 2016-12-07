const addTodo = (text) => ({
  type: 'ADD_TODO',
  text,
  id: uuid.v4()
})

const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

const requestTodos = (filter) => ({
  type: 'REQUEST_TODOS',
  filter
})

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
})

const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve()
  }
  dispatch(requestTodos(filter))
  return api.fetchTodos(filter).then(response =>
    dispatch(receiveTodos(filter, response))
  )
}

const actions = { addTodo, toggleTodo, fetchTodos, requestTodos }
