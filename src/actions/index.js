import * as types from '../constants/ActionTypes'
// shopping-cart
import shop from '../modules/shoppingCart/api/shop'

// todo
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

// shopping-cart
export const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

export const addToCartUnsafe = (productId) => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })

  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
  })
}

// treeView
export const increment = (nodeId) => ({
  type: types.INCREMENT,
  nodeId
})

let nextId = 0
export const createNode = () => ({
  type: types.CREATE_NODE,
  nodeId: `new_${nextId++}`
})

export const deleteNode = (nodeId) => ({
  type: types.DELETE_NODE,
  nodeId
})

export const addChild = (nodeId, childId) => ({
  type: types.ADD_CHILD,
  nodeId,
  childId
})

export const removeChild = (nodeId, childId) => ({
  type: types.REMOVE_CHILD,
  nodeId,
  childId
})

// async
export const selectSubreddit = subreddit => ({
  type: types.SELECT_SUBREDDIT,
  subreddit
})

export const invalidateSubreddit = subreddit => ({
  type: types.INVALIDATE_SUBREDDIT,
  subreddit
})

export const requestPosts = subreddit => ({
  type: types.REQUEST_POSTS,
  subreddit
})

export const receivePosts = (subreddit, json) => ({
  type: types.RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})

const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit))
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(subreddit, json)))
}

const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit]

  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit))
  }
}



























