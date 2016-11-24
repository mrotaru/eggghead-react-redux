const Footer = () => (
  <div>
    <FilterLink
      filter='SHOW_ALL'
    >All</FilterLink>{' '}
    <FilterLink
      filter='SHOW_COMPLETED'
    >Completed</FilterLink>{' '}
    <FilterLink
      filter='SHOW_ACTIVE'
    >Active</FilterLink>{' '}
  </div>
)
