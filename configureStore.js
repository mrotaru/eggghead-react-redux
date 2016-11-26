const configureStore = () => {
  const persistedState = loadState()
  const store = Redux.createStore(todoApp, persistedState)

  store.subscribe(lodash.throttle(() => {
    saveState({
      todos: store.getState().todos
    })
  }))

  return store
}
