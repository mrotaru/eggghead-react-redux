const { combineReducers } = Redux
const { createList, getIds } = fromCreateList
const { byId, getTodo } = fromById

const listByFilter = combineReducers({
  all: createList('all'),
  completed: createList('completed'),
  active: createList('active')
})

// root reducer
const todoApp = combineReducers({
  byId,
  listByFilter
})

// listByFilter is defined in this file, so we can make
// assumptions of how to get it from the state. But, `byId`
// reducer is defined elsewhere, so we use a selector it exports.
// We pass the sub-state as a parameter; we know where it is because
// it is set as part of the root reducer, also defined in this file.
const getVisibleTodos = (state, filter) => {
  const ids = getIds(state.listByFilter[filter])
  return ids.map(id => getTodo(state.byId, id))
}

const getIsFetching = (state, filter) =>
  fromCreateList.getIsFetching(state.listByFilter[filter])

const getErrorMessage = (state, filter) =>
  fromCreateList.getErrorMessage(state.listByFilter[filter])
