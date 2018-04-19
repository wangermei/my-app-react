import { createStore, applyMiddleware } from 'redux'
import from 'redux-thunk'
import rootReducer from '../../../reducer'

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState
  )
}

export default configureStore