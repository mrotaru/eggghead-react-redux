let selectors = {
  getVisibleTodos (state, filter) {
    const ids = state.idsByFilter[filter]
    return ids.map(id => state.byId[id])
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS':
      const nextState = {...state}
      action.response.map(todo => {
        nextState[todo.id] = todo
      })
      return nextState
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  if (action.filter !== 'all') {
    return state
  }
  switch (action.type) {
    case 'RECEIVE_TODOS':
      return action.response.map(todo => todo.id)
    default:
      return state
  }
}
const completedIds = (state = [], action) => {
  if (action.filter !== 'completed') {
    return state
  }
  switch (action.type) {
    case 'RECEIVE_TODOS':
      return action.response.map(todo => todo.id)
    default:
      return state
  }
}
const activeIds = (state = [], action) => {
  if (action.filter !== 'active') {
    return state
  }
  switch (action.type) {
    case 'RECEIVE_TODOS':
      return action.response.map(todo => todo.id)
    default:
      return state
  }
}


const idsByFilter = Redux.combineReducers({
  all: allIds,
  completed: completedIds,
  active: activeIds
})

// root reducer
const todoApp = Redux.combineReducers({
  todos: Redux.combineReducers({
    idsByFilter,
    byId
  })
})

// state = whole state; this selector abstracts away state shape
// from the components
const getVisibleTodos = (state, filter) =>
  selectors.getVisibleTodos(state.todos, filter)
