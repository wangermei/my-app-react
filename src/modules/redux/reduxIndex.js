import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../../actions'
import Header from './Header'

function ReduTest({todos, actions}) {
  return(
    <div>
      <Header addTodo={actions.addTodo} />
      {/*<MainSection todos={todos} actions={actions} />*/}
    </div>
  )
}

ReduTest.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (ReduTest);