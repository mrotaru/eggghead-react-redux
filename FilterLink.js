const FilterLink = ({
  filter,
  currentFilter,
  children,
  onFilterClick
}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>
  }
  return (
    <a
      href='#'
      onClick={(e) => {
        onFilterClick(filter)
      }}
    >{children}</a>
  )
}