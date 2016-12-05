// reducer generator
// returns a reducer for a single filter
const createList = (filter) => {
  return (state = [], action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case 'RECEIVE_TODOS':
        return action.response.map(todo => todo.id)
      default:
        return state
    }
  }
}

// state = state of the respective filter reducer
const getIds = (state) => state

const fromCreateList = { createList, getIds }
