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

const configureStore = () => {
  const persistedState = loadState()
  const store = Redux.createStore(todoApp, persistedState)

  store.dispatch = addLoggingToDispatch(store)

  store.subscribe(lodash.throttle(() => {
    saveState({
      todos: store.getState().todos
    })
  }))

  return store
}
