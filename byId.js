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

// state = state of `byId` reducer
const getTodo = (state, id) => state[id]

const fromById = { byId, getTodo }
