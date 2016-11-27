const getVisibleTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case 'all': return todos
    case 'active': return todos.filter((t) => t.completed !== true)
    case 'completed': return todos.filter((t) => t.completed === true)
  }
}

const mapStatetoProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      ownProps.filter
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = ReactRedux.connect(
  mapStatetoProps,
  mapDispatchToProps
)(TodoList)
