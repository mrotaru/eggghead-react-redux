const Footer = ({ visibilityFilter, onFilterClick }) => (
  <div>
    <FilterLink
      filter='SHOW_ALL'
      onFilterClick={onFilterClick}
      currentFilter={visibilityFilter}
    >All</FilterLink>{' '}
    <FilterLink
      filter='SHOW_COMPLETED'
      onFilterClick={onFilterClick}
      currentFilter={visibilityFilter}
    >Completed</FilterLink>{' '}
    <FilterLink
      filter='SHOW_ACTIVE'
      onFilterClick={onFilterClick}
      currentFilter={visibilityFilter}
    >Active</FilterLink>{' '}
  </div>
)
