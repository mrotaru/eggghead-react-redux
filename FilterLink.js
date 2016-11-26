const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick () {
    dispatch(setVisibibilityFilter(ownProps.filter))
  }
})

const FilterLink = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
