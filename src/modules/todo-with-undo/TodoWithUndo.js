import React from 'react'
import AddTo from './AddTo'
import VisibleTodoList from './VisibleTodoList'
import Footer from '../redux/Footer'

class TodoWithUndo extends React.Component {
  render() {
    return(
      <div>
        <AddTo/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    )
  }
}

export default TodoWithUndo;