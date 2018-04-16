import React from 'react'
import PropTypes from 'prop-types'
import * as TodoActions from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCompletedTodoCount } from '../../selectors'
import VisibleTodoList from './VisibleTodoList'
import Footer from './Footer'

function MainSection ({ todosCount, completedCount, actions }) {
  console.log(todosCount)
  console.log(completedCount)
  return(
   <section className={'displayList'}>
     {
       !!todosCount &&
         <span>
           <input type='checkbox' checked={todosCount === completedCount} />
           <label onClick={actions.completeAllTodos} />
         </span>
     }
     <VisibleTodoList />
     {
       !!todosCount &&
         <Footer
           completedCount={completedCount}
           activeCount={todosCount - completedCount}
           onClearCompleted={actions.clearCompleted} />
     }
   </section>
  )
}


const mapStateToProps = (state) => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
) (MainSection);