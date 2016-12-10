const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.todos
    }
  }
  return state
}

// state = state of `byId` reducer
const getTodo = (state, id) => state[id]

const fromById = { byId, getTodo }
