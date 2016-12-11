const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.todos
    }
  }
  return state
}

// state = state of `byId` reducer
const getTodo = (state, id) => state[id]

const fromById = { byId, getTodo }
