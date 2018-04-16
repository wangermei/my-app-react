import { combineReducers } from 'redux'
import todos from './todos'
import todo from './todo'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  todo
})

export default rootReducer;