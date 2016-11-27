const fakeDatabase = {
  todos: [{
    id: uuid.v4(),
    text: 'todo 1',
    completed: true
  }, {
    id: uuid.v4(),
    text: 'todo 2',
    completed: true
  }, {
    id: uuid.v4(),
    text: 'todo 3',
    completed: false
  }]
}

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

const fetchTodos = (filter) => {
  return delay(500).then(() => {
    switch (filter) {
      case 'all': return fakeDatabase.todos
      case 'active': return fakeDatabase.todos.filter((t) => t.completed !== true)
      case 'completed': return fakeDatabase.todos.filter((t) => t.completed === true)
      default: throw new Error(`Unknown filter: ${filter}`)
    }
  })
}

const api = { fetchTodos }
