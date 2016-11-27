const getAllTodos = (state) =>
  state.allIds.map(id => state.byId[id])

let selectors = {
  getVisibleTodos (state, visibilityFilter) {
    const allTodos = getAllTodos(state)
    switch (visibilityFilter) {
      case 'all': return allTodos
      case 'active': return allTodos.filter((t) => t.completed !== true)
      case 'completed': return allTodos.filter((t) => t.completed === true)
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
const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        [action.id]: todo(undefined, action)
      })
    case 'REMOVE_TODO':
      delete state[action.id]
      return Object.assign({}, state)
    case 'TOGGLE_TODO':
      return Object.assign({}, state, {
        [action.id]: todo(state[action.id], action)
      })
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id]
    default:
      return state
  }
}

// root reducer
const todoApp = Redux.combineReducers({
  todos: Redux.combineReducers({
    byId,
    allIds
  })
})

// state = whole state; components can use this selector to getVisibleTodos
// the slice of the state needed without caring about the sate shape.
const getVisibleTodos = (state, filter) =>
  selectors.getVisibleTodos(state.todos, filter)
