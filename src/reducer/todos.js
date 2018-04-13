import { ADD_TODO } from "../constants/ActionTypes";

const initialState = [
  {
    text: '重庆',
    id: 1,
    completed: false
  }
]

export default function todos(state = initialState, action) {
  console.log(action)
  console.log(action.type)
  console.log(action.text)

  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, {
          text: action.text,
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId),-1) + 1,
          completed: false
        }
      ]
    default:
      return state
  }
}