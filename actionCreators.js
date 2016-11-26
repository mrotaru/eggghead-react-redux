const addTodo = (text) => ({
  type: 'ADD_TODO',
  text,
  id: uuid.v4()
})

const setVisibibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
