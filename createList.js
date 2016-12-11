const { combineReducers } = Redux

// reducer generator
// returns a reducer for a single filter
const createList = (filter) => {
  const handleToggle = (state, action) => {
    const todo = action.response.entities.todos[action.response.result]
    if (filter === 'completed' && !todo.completed) {
      return state.filter(t => t !== todo.id)
    }
    if (filter === 'active' && todo.completed) {
      return state.filter(t => t !== todo.id)
    }
    return state
  }

  const ids = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_TODOS_SUCCESS':
        return action.filter === filter
          ? action.response.result
          : state
      case 'ADD_TODO_SUCCESS':
        return filter !== 'completed'
          ? [...state, action.response.result]
          : state
      case 'TOGGLE_TODO_SUCCESS':
        return handleToggle(state, action)
      default:
        return state
    }
  }

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case 'FETCH_TODOS_REQUEST':
        return true
      case 'FETCH_TODOS_SUCCESS':
      case 'FETCH_TODOS_ERROR':
        return false
      default:
        return state
    }
  }

  const errorMessage = (state = null, action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case 'FETCH_TODOS_ERROR':
        return action.message
      case 'FETCH_TODOS_SUCCESS':
      case 'FETCH_TODOS_REQUEST':
        return null
      default:
        return state
    }
  }

  return combineReducers({
    ids,
    isFetching,
    errorMessage
  })
}

// state = state of the respective filter reducer
const getIds = (state) => state.ids
const getIsFetching = (state) => state.isFetching
const getErrorMessage = (state) => state.errorMessage

const fromCreateList = {
  createList,
  getIds,
  getIsFetching,
  getErrorMessage
}
