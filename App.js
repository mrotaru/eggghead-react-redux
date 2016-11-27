const App = ({ params }) => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <hr />
    <button onClick={() => localStorage.removeItem('state')}>Clear Local Data</button>
  </div>
)
