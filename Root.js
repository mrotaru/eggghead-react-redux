const { Provider } = ReactRedux
const { Router, Route, browserHistory, hashHistory, IndexRoute } = ReactRouter

// browserHistory doesn't work, no route is matched
// I guess because a real server is needed but not sure

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/(:filter)' component={App} />
    </Router>
  </Provider>
)
