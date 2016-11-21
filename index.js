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
      return state.filter((t) => t.id !== action.id)
    case 'TOGGLE_TODO':
      return state.map((t) => {
        if (t.id !== action.id) {
          return state
        }
        return todo(t, action)
      })
    default:
      return state
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

// const todoApp = Redux.combineReducers({
const todoApp = Redux.combineReducers({
  todos,
  visibilityFilter
})

let store = Redux.createStore(todoApp)

let id = 0
class TodoApp extends React.Component {
  render () {
    return (
      <div>
        <input ref={(node) => {
          this.input = node
        }} />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: id++
          })
          this.input.value = ''
        }}>Add</button>
        <ul>
          {this.props.todos.map((t) => (
            <li key={t.id}>{t.text}</li>
          ))}
        </ul>
      </div>
    )
  }
}

let render = () => (
  ReactDOM.render(
    <TodoApp todos={store.getState().todos} />,
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
render()
