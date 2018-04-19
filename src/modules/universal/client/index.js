// import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../common/configureStore'
import App from '../App'

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)
const rootElement = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
)