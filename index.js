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

var store = Redux.createStore(todoApp)


const getVisibleTodos = () => {
  let state = store.getState()
  switch (state.visibilityFilter) {
    case 'SHOW_ALL': return state.todos
    case 'SHOW_ACTIVE': return state.todos.filter((t) => t.completed !== true)
    case 'SHOW_COMPLETED': return state.todos.filter((t) => t.completed === true)
  }
}

let id = 0
const TodoApp = ({ visibilityFilter, todos }) => (
  <div>
    <AddTodo
      onAddClick={(text) => {
        store.dispatch({
          type: 'ADD_TODO',
          text,
          id: id++
        })
      }} />
    <TodoList
      todos={getVisibleTodos(visibilityFilter)}
      onTodoClick={(id) => {
        store.dispatch({
          type: 'TOGGLE_TODO',
          id
        })
      }}
    />
    <Footer
      onFilterClick={(filter) => {
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
        })
      }}
      visibilityFilter={visibilityFilter} />
  </div>
)

let render = () => {
  return ReactDOM.render(
    <TodoApp {...store.getState()} />,
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
