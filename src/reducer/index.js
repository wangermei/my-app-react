// import { combineReducers } from 'redux'
// import todos from './todos'
// import todo from './todo'
// import visibilityFilter from './visibilityFilter'
// import cart, * as fromCart from './cart'
// import products, * as fromProducts  from './products'
//
// const rootReducer = combineReducers({
//   todos,
//   visibilityFilter,
//   todo,
//   cart,
//   products
// })
//
// const getAddedIds = (state) => fromCart.getAddedIds(state.cart)
// const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
// const getProduct = (state, id) => fromProducts.getProduct(state.products, id)
//
// export const getTotal = state =>
//   getAddedIds(state)
//     .reduce((total, id) =>
//       total + getProduct(state, id).price * getQuantity(state, id),
//       0
//     ).toFixed(2)
//
// export const getCartProducts = state =>
//   getAddedIds(state).map(id => ({
//     ...getProduct(state, id),
//     quantity: getQuantity(state, id)
//   }))
//
// export default rootReducer;


// treeView
// import { INCREMENT, ADD_CHILD, REMOVE_CHILD, CREATE_NODE, DELETE_NODE } from '../constants/ActionTypes'
//
// const childIds = (state, action) => {
//   switch (action.type) {
//     case ADD_CHILD:
//       return [ ...state, action.childId ]
//     case REMOVE_CHILD:
//       return state.filter(id => id !== action.childId )
//     default:
//       return state
//   }
// }
//
// const node = (state, action) => {
//   switch (action.type) {
//     case CREATE_NODE:
//       return {
//         id: action.nodeId,
//         counter: 0,
//         childIds: []
//       }
//     case INCREMENT:
//       return {
//         ...state,
//         counter: state.counter + 1
//       }
//     case ADD_CHILD:
//     case REMOVE_CHILD:
//       return {
//         ...state,
//         childIds: childIds(state.childIds, action)
//       }
//     default:
//       return state
//   }
// }
//
// const getAllDescendantIds = (state, nodeId) => (
//   state[nodeId].childIds.reduce((acc, childId) => (
//     [ ...acc, childId, ...getAllDescendantIds(state, childId) ]
//   ), [])
// )
//
// const deleteMany = (state, ids) => {
//   state = { ...state }
//   ids.forEach(id => delete state[id])
//   return state
// }
//
// export default (state = {}, action) => {
//   const { nodeId } = action
//
//   if (typeof nodeId === 'undefined') {
//     return state
//   }
//
//   if (action.type === DELETE_NODE) {
//     const descendantIds = getAllDescendantIds(state, nodeId)
//     return deleteMany(state, [ nodeId, ...descendantIds ])
//   }
//
//   return {
//     ...state,
//     [nodeId]: node(state[nodeId], action)
//   }
// }

// async
import { combineReducers } from 'redux'
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT
} from '../constants/ActionTypes'

const selectedSubreddit = (state = 'reactjs', action) => {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const postsBySubreddit = (state = { }, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
})

export default rootReducer;
