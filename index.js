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

const todos = (state = [], action) => {
  let i = action.id ? state.findIndex((todo) => todo.id === action.id) : -1
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'REMOVE_TODO':
      return [
        ...state.slice(0, i),
        ...state.slice(i + 1)
      ]
    case 'TOGGLE_TODO':
      return [
        ...state.slice(0, i),
        todo(state[i], action),
        ...state.slice(i + 1)
      ]
    default:
      return state
  }
}

let store = Redux.createStore(todos)

let render = () => (
  ReactDOM.render(
    <h1>Hello</h1>,
    document.getElementById('root')
  )
)

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
console.assert(lodash.isequal(store.getState(), [
  Object.assign({}, t1, { completed: false })
]))

// test marking as completed
store.dispatch({
  type: 'TOGGLE_TODO',
  id: t1.id
})
console.assert(lodash.isequal(store.getState(), [
  Object.assign({}, t1, { completed: true })
]))

// test removing
store.dispatch({
  type: 'REMOVE_TODO',
  id: t1.id
})
console.assert(lodash.isequal(store.getState(), []))

store.subscribe(() => render())
render()
