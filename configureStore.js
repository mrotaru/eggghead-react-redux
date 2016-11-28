const logger = (store) => {
  return (next) => {
    if (!console.group) {
      return next
    }

    return (action) => {
      console.group(action.type)
      console.log('%c prev state', 'color: gray', store.getState())
      console.log('%c action', 'color: blue', action)
      const retVal = next(action)
      console.log('%c next state', 'color: green', store.getState())
      console.groupEnd(action.type)
      return retVal
    }
  }
}

const promise = (store) => {
  return (next) => {
    return (action) => {
      if (typeof action.then === 'function') {
        return action.then(next)
      }
      return next(action)
    }
  }
}

const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares.slice().reverse().forEach((middleware) => {
    store.dispatch = middleware(store)(store.dispatch)
  })
}

const configureStore = () => {
  const store = Redux.createStore(todoApp, persistedState)
  const middlewares = []

  middlewares.push(promise)
  middlewares.push(logger)
  wrapDispatchWithMiddlewares(store, middlewares)

  const persistedState = loadState()

  store.subscribe(lodash.throttle(() => {
    saveState({
      todos: store.getState().todos
    })
  }))

  return store
}
