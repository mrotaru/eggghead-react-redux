let selectors = {
  getVisibleTodos (state, visibilityFilter) {
    switch (visibilityFilter) {
      case 'all': return state
      case 'active': return state.filter((t) => t.completed !== true)
      case 'completed': return state.filter((t) => t.completed === true)
    }
  }
}

// reducer for a single todo item
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      return {
        id: state.id,
        text: state.text,
        completed: !state.completed
      }
    default:
      return state
  }
}

// reducer for all todos
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'REMOVE_TODO':
      return state.filter((t) => t.id !== action.id)
    case 'TOGGLE_TODO':
      return state.map((t) => {
        if (t.id !== action.id) {
          return t
        }
        return todo(t, action)
      })
    default:
      return state
  }
}

// root reducer
const todoApp = Redux.combineReducers({
  todos
})

// state = whole state; components can use this selector to getVisibleTodos
// the slice of the state needed without caring about the sate shape.
const getVisibleTodos = (state, filter) =>
  selectors.getVisibleTodos(state.todos, filter)
