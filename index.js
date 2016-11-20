let MiniRedux = (function () {
  let Store = {
    dispatch: function (action) {
      this.state = this.reducer(action)
      for (let subscriber of this.subscribers) {
        subscriber()
      }
    },
    subscribe: function (callback) {
      this.subscribers.push(callback)
    },
    getState: function () {
      return this.state
    }
  }

  return {
    createStore: (_reducer) => {
      return Object.assign(Object.create(Store), {
        state: {},
        reducer: null,
        subscribers: []
      })
    }
  }
})()

let { createStore } = MiniRedux

let counterReducer = (state = { count: 0 }, action) => {
  if (action.type === 'INCREMENT') return { count: state.count + 1 }
  if (action.type === 'DECREMENT') return { count: state.count - 1 }
  return undefined
}

let store = createStore(counterReducer)

store.subscribe(() => {
  document.body.innerText = store.getState().count
})


