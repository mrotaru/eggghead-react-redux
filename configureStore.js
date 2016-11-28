const { createStore, applyMiddleware } = Redux

const { reduxPromise, reduxLogger } = window

const process = {
  env: {
    NODE_ENV: 'development'
  }
}

const configureStore = () => {
  const middlewares = [reduxPromise]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(reduxLogger())
  }

  const store = createStore(
    todoApp,
    applyMiddleware(...middlewares)
  )
  return store
}
