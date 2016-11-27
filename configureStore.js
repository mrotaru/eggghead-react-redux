const addLoggingToDispatch = (store) => {
  const originalDispatch = store.dispatch

  if (!console.group) {
    return originalDispatch
  }

  return (action) => {
    console.group(action.type)
    console.log('%c prev state', 'color: gray', store.getState())
    console.log('%c action', 'color: blue', action)
    const retVal = originalDispatch(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd(action.type)
    return retVal
  }
}

const addPromiseSupportToDispatch = (store) => {
  const originalDispatch = store.dispatch
  return (action) => {
    if (typeof action.then === 'function') {
      return action.then(originalDispatch)
    }
    return originalDispatch(action)
  }
}

const configureStore = () => {
  const persistedState = loadState()
  const store = Redux.createStore(todoApp, persistedState)

  store.dispatch = addLoggingToDispatch(store)
  store.dispatch = addPromiseSupportToDispatch(store)

  store.subscribe(lodash.throttle(() => {
    saveState({
      todos: store.getState().todos
    })
  }))

  return store
}
