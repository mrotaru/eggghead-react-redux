class VisibleTodoList extends React.Component {
  componentDidMount () {
    fetchTodos(this.props.filter).then(todos =>
      console.log(this.props.filter, todos)
    )
  }
  componentDidUpdate (prevProps) {
    if (this.props.filter !== prevProps.filter) {
      fetchTodos(this.props.filter).then(todos =>
        console.log(this.props.filter, todos)
      )
    }
  }
  render () {
    return <TodoList {...this.props} />
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
  { onTodoClick: toggleTodo }
)(VisibleTodoList))
