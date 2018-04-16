import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import './redux.css'

function TodoList({ filteredTodos, actions }) {
  return(
    <ul>
      {filteredTodos.map(todo =>
        <TodoItem key={todo.id} todo={todo} {...actions}/>
      )}
  </ul>
)
}

TodoList.propTypes = {
  filteredTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default TodoList