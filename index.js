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


let a = [1, 2, 3, 4, 5]
let i = 1
console.log(a.splice(i, 1)) // mutating ! 

// remove i, not mutating
a = [1, 2, 3, 4, 5]
console.log([
  ...a.slice(0, i),
  ...a.slice(i + 1)
])

// change element at i
console.log([
  ...a.slice(0, i),
  a[i] + 10,
  ...a.slice(i + 1)
])
