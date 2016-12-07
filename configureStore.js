const { createStore, applyMiddleware } = Redux

const { reduxPromise, reduxLogger } = window

const process = {
  env: {
    NODE_ENV: 'development'
  }
}

const thunk = (store) => (next) => (action) =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)

const configureStore = () => {
  const middlewares = [thunk]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(reduxLogger())
  }

  const store = createStore(
    todoApp,
    applyMiddleware(...middlewares)
  )
  return store
}
