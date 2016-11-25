const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
