let counterReducer = (state = { count: 0 }, action) => {
  if (action && action.type === 'INCREMENT') return { count: state.count + 1 }
  if (action && action.type === 'DECREMENT') return { count: state.count - 1 }
  return state
}

let store = Redux.createStore(counterReducer)

let Counter = ({count}) => (
  <h1>{count}</h1>
)

let render = () => (
  ReactDOM.render(
    Counter({ count: store.getState().count }),
    document.getElementById('root')
  )
)

store.subscribe(() => render())
render()

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' })
})
