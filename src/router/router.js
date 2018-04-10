import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../modules/home/Home'
import Test from '../modules/test/Test'

// export default class RouterConfig extends React.Component {
//   render () {
//     return (
//       <Router>
//         <div>
//           <Route path='/' exact component={Home} />
//           <Route path='/test' component={Test} />
//         </div>
//       </Router>
//     );
//   }
// }

function RouteConfig() {
  return (
    <Router>
      <h1>
        <Route path='/' exact component={Home} />
        <Route path='/test' component={Test} />
      </h1>
    </Router>
  );
}

export default RouteConfig;