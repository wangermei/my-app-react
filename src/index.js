import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouteConfig from './router/router'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouteConfig />, document.getElementById('root'));
registerServiceWorker();
