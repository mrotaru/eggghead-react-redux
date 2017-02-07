const { schema } = window.normalizr

const todo = new schema.Entity('todos')
const schemata = {
  todo,
  arrayOfTodos: [todo]
}
