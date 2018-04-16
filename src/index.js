import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouteConfig from './router/router'
import reducer from './reducer'
// import { thunk } from 'redux-thunk'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)  // , applyMiddleware(thunk)

ReactDOM.render(
  <Provider store={store}>
    <RouteConfig/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
