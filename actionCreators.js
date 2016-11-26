let id = 0

const addTodo = (text) => ({
  type: 'ADD_TODO',
  text,
  id: id++
})

const setVisibibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
