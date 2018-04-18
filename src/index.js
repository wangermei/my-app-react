// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import RouteConfig from './router/router'
// import reducer from './reducer'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import registerServiceWorker from './registerServiceWorker';
//
// const store = createStore(reducer)
//
// ReactDOM.render(
//   <Provider store={store}>
//     <RouteConfig/>
//   </Provider>,
//   document.getElementById('root')
// );
// registerServiceWorker();


// shopping-cart
// import React from 'react'
// import reducer from './reducer'
// import RouterConfig from './router/router'
// import ReactDOM from 'react-dom'
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
// import { createLogger } from 'redux-logger'
// import thunk from 'redux-thunk'
// import { getAllProducts } from './actions'
//
// const middleware = [thunk]
// if (process.env.NODE_ENV !== "production") {
//   middleware.push(createLogger())
// }
//
// const store = createStore(
//   reducer,
//   applyMiddleware(...middleware)
// )
//
// store.dispatch(getAllProducts())
//
// ReactDOM.render(
//   <Provider store={store}>
//     <RouterConfig/>
//   </Provider>,
//   document.getElementById('root')
// );


// treeView
import React from 'react'
import reducer from './reducer'
import Node from './modules/treeView/Node'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import generateTree from './modules/treeView/generateTree'

const tree = generateTree()
const store = createStore(reducer, tree)

ReactDOM.render(
  <Provider store={store}>
    <Node id={0} />
  </Provider>,
  document.getElementById('root')
);















