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
          return t
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

const FilterLink = ({
  filter,
  children
}) => {
  return (
    <a
      href='#'
      onClick={(e) => {
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
        })
      }}
    >{children}</a>
  )
}

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
            <li
              key={t.id}
              style={{ textDecoration: t.completed ? 'line-through' : 'none' }}
              onClick={() => {
                store.dispatch({
                  type: 'TOGGLE_TODO',
                  id: t.id
                })
              }}
            >{t.text}</li>
          ))}
        </ul>
        <FilterLink filter='SHOW_ALL'>All</FilterLink>{' '}
        <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>{' '}
        <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>{' '}
      </div>
    )
  }
}

let render = () => {
  const getVisibleTodos = () => {
    let state = store.getState()
    switch (state.visibilityFilter) {
      case 'SHOW_ALL': return state.todos
      case 'SHOW_ACTIVE': return state.todos.filter((t) => t.completed !== true)
      case 'SHOW_COMPLETED': return state.todos.filter((t) => t.completed === true)
    }
  }
  return ReactDOM.render(
    <TodoApp todos={getVisibleTodos()} />,
    document.getElementById('root')
  )
}

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
