const App = () => (
  <div>
    <h1>Hello</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <hr />
    <button onClick={() => localStorage.removeItem('state')}>Clear Local Data</button>
  </div>
)
