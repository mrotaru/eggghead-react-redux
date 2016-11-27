const getVisibleTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case 'all': return todos
    case 'active': return todos.filter((t) => t.completed !== true)
    case 'completed': return todos.filter((t) => t.completed === true)
  }
}

const mapStatetoProps = (state, { params }) => ({
  todos: getVisibleTodos(
    state.todos,
    params.filter || 'all'
  )
})

const { connect } = ReactRedux
const { withRouter } = ReactRouter

const VisibleTodoList = withRouter(connect(
  mapStatetoProps,
  { onTodoClick: toggleTodo }
)(TodoList))
