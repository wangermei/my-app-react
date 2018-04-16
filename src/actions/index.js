import * as types from '../constants/ActionTypes'

let nextTodoId = 0
export const addTodo = (text) => ({
  type: types.ADD_TODO, text
})

export const addTodos = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const completeTodo = id => ({
  type: types.COMPLETE_TODO, id
})

export const deleteTodo = id => ({
  type: types.DELETE_TODO, id
})

export const editTodo = (id, text) => ({
  type: types.EDIT_TODO, id, text
})

export const clearCompleted = () => ({
  type: types.CLEAR_COMPLETED
})

export const setVisibilityFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILTER, filter
})

export const toggleTodo = (id) => ({
  type: types.TOGGLE_TODO,
  id
})
