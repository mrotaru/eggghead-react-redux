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

const addTodo = (text) =>
  delay(500).then(() => {
    const todo = {
      id: uuid.v4(),
      text,
      completed: false
    }
    fakeDatabase.todos.push(todo)
    return todo
  })

const toggleTodo = (id) =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id)
    todo.completed = !todo.completed
    return todo
  })

const fetchTodos = (filter) => {
  return delay(500).then(() => {
    // if (Math.random() > 0.5) {
    //   throw new Error('Boom!')
    // }
    switch (filter) {
      case 'all': return fakeDatabase.todos
      case 'active': return fakeDatabase.todos.filter((t) => t.completed !== true)
      case 'completed': return fakeDatabase.todos.filter((t) => t.completed === true)
      default: throw new Error(`Unknown filter: ${filter}`)
    }
  })
}

const api = { addTodo, toggleTodo, fetchTodos }
