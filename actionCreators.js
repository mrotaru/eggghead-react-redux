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

const addTodo = (text) => (dispatch, getState) => {
  return api.addTodo(text).then(response => {
    dispatch({
      type: 'ADD_TODO_SUCCESS',
      response
    })
  })
}

const toggleTodo = (id) => id

const actions = { addTodo, toggleTodo, fetchTodos }
