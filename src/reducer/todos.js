import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  CLEAR_COMPLETED
} from "../constants/ActionTypes";

const initialState = [
  {
    text: '重庆',
    id: 1,
    completed: false
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId),-1) + 1,
          completed: false
        }
      ]
    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )
    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          {...todo, text: action.text} :
          todo
      )
    case CLEAR_COMPLETED:
      return state.filter((todo) => todo.compeleted === false)
    default:
      return state
  }
}