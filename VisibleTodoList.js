class VisibleTodoList extends React.Component {
  fetchData () {
    const { filter, receiveTodos } = this.props
    fetchTodos(filter).then(todos =>
      receiveTodos(todos, filter)
    )
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
    const { toggleTodo, ...rest } = this.props
    return <TodoList {...rest} onTodoClick={toggleTodo} />
  }
}

const mapStatetoProps = (state, { params }) => {
  const filter = params.filter || 'all'
  return {
    todos: getVisibleTodos(state, filter),
    filter
  }
}

const { connect } = ReactRedux
const { withRouter } = ReactRouter

VisibleTodoList = withRouter(connect(
  mapStatetoProps,
  actions
)(VisibleTodoList))
