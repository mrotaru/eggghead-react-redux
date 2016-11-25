let id = 0

const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text,
    id: id++
  }
}

const setVisibibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
