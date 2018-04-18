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
import Dialog from '../modules/composition/dialog'
import Inheritance from '../modules/composition/inheritance'
import ContextDialog from '../modules/composition/contextDialog'
import GaoIndex from '../modules/gaoji/index'
import Array from '../modules/gaoji/array'
import ReduxIndex from '../modules/redux/reduxIndex'
import ShoppingCart from '../modules/shoppingCart/App'
import TreeViewNode from '../modules/treeView/Node'
// import TodoWithUndo from '../modules/todo-with-undo/TodoWithUndo'
// import Error from '../modules/gaoji/error'

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
          <Route path='/dialog' component={Dialog} />
          <Route path='/inheritance' component={Inheritance} />
          <Route path='/contextDialog' component={ContextDialog} />
          <Route path='/gaoIndex' component={GaoIndex} />
          <Route path='/array' component={Array} />
          <Route path='/reduxIndex' component={ReduxIndex} />
          <Route path='/shoppingCart' component={ShoppingCart} />
          <Route path='/treeViewNode' component={TreeViewNode} />
          {/*<Route path='/todoWithUndo' component={TodoWithUndo} />*/}
          {/*<Route path='/error' component={Error} />*/}
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