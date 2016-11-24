let t1 = {
  id: 1,
  text: 't1'
}

// test adding
store.dispatch({
  type: 'ADD_TODO',
  id: t1.id,
  text: t1.text
})
console.assert(lodash.isequal(store.getState().todos, [
  Object.assign({}, t1, { completed: false })
]))

// test marking as completed
store.dispatch({
  type: 'TOGGLE_TODO',
  id: t1.id
})
console.assert(lodash.isequal(store.getState().todos, [
  Object.assign({}, t1, { completed: true })
]))

// test removing
store.dispatch({
  type: 'REMOVE_TODO',
  id: t1.id
})
console.assert(lodash.isequal(store.getState().todos, []))

store.subscribe(() => render())