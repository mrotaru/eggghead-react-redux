const addTodo = (text) => ({
  type: 'ADD_TODO',
  text,
  id: uuid.v4()
})

const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve()
  }

  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter
  })

  return api.fetchTodos(filter).then(response =>
    dispatch({
      type: 'FETCH_TODOS_SUCCESS',
      filter,
      response
    }), error => {
    dispatch({
      type: 'FETCH_TODOS_ERROR',
      filter,
      message: error.message || 'Something went wrong.'
    })
  })
}

const actions = { addTodo, toggleTodo, fetchTodos }
