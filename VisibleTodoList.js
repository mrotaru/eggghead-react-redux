const mapStatetoProps = (state, { params }) => ({
  todos: getVisibleTodos(
    state,
    params.filter || 'all'
  )
})

const { connect } = ReactRedux
const { withRouter } = ReactRouter

const VisibleTodoList = withRouter(connect(
  mapStatetoProps,
  { onTodoClick: toggleTodo }
)(TodoList))
