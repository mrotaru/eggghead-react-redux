const App = ({ params }) => (
  <div>
    <AddTodo />
    <VisibleTodoList
      filter={params.filter || 'all'}
    />
    <Footer />
    <hr />
    <button onClick={() => localStorage.removeItem('state')}>Clear Local Data</button>
  </div>
)
