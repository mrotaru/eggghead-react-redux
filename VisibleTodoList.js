class VisibleTodoList extends React.Component {
  fetchData () {
    const { filter, fetchTodos } = this.props
    fetchTodos(filter)
  }
  componentDidMount () {
    this.fetchData()
  }
  componentDidUpdate (prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }
  render () {
    const { toggleTodo, errorMessage, todos, isFetching } = this.props
    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }
    if (errorMessage && !todos.length) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={() => this.fetchData()}
        />
      )
    }

    return (
      <TodoList
        todos={todos}
        onTodoClick={toggleTodo}
      />
    )
  }
}

const mapStatetoProps = (state, { params }) => {
  const filter = params.filter || 'all'
  return {
    todos: getVisibleTodos(state, filter),
    errorMessage: getErrorMessage(state, filter),
    isFetching: getIsFetching(state, filter),
    filter
  }
}

const { connect } = ReactRedux
const { withRouter } = ReactRouter

VisibleTodoList = withRouter(connect(
  mapStatetoProps,
  actions
)(VisibleTodoList))
