import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../modules/home/Home'
import Test from '../modules/test/Test'
import Clock from '../modules/clock/clock'
import Clicks from '../modules/click/clicks'
import Buttons from '../modules/click/buttons'
import Login from '../modules/login/login'
import ControlLogin from '../modules/loginControl/controlLogin'
import MailBox from '../modules/loginControl/mailBox'
import Warning from '../modules/loginControl/warning'
import List from '../modules/renderList/list'
import OnlyKeys from '../modules/renderList/onlyKeys'
import Input from '../modules/forms/input'
import Select from '../modules/forms/select'
import Ref from '../modules/forms/ref'
import MoreInput from '../modules/forms/moreInput'
import Celsius from '../modules/stateUp/celsius'
import Scale from '../modules/stateUp/scale'

export default class RouterConfig extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Route path='/' exact component={Home} />
          <Route path='/test' component={Test} />
          <Route path='/clock' component={Clock} />
          <Route path='/click' component={Clicks} />
          <Route path='/buttons' component={Buttons} />
          <Route path='/login' component={Login} />
          <Route path='/controlLogin' component={ControlLogin} />
          <Route path='/mailBox' component={MailBox} />
          <Route path='/warning' component={Warning} />
          <Route path='/list' component={List} />
          <Route path='/onlyKeys' component={OnlyKeys} />
          <Route path='/input' component={Input} />
          <Route path='/select' component={Select} />
          <Route path='/ref' component={Ref} />
          <Route path='/moreInput' component={MoreInput} />
          <Route path='/celsius' component={Celsius} />
          <Route path='/scale' component={Scale} />
        </div>
      </Router>
    );
  }
}

// function RouteConfig() {
//   return (
//     <Router>
//       <div>
//         <Route path='/' exact component={Home} />
//         <Route path='/test' component={Test} />
//         <Route path='/clock' component={Clock} />
//         <Route path='/click' component={Click} />
//       </div>
//     </Router>
//   );
// }
//
// export default RouteConfig;