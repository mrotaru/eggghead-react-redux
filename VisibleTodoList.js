const getVisibleTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case 'SHOW_ALL': return todos
    case 'SHOW_ACTIVE': return todos.filter((t) => t.completed !== true)
    case 'SHOW_COMPLETED': return todos.filter((t) => t.completed === true)
  }
}

const mapStatetoProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
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
