import React from 'react'
import { connect } from 'react-redux'
import { addTodos } from '../../actions'

function AddTo(dispatch) {
  let input
  return(
    <form onSubmit={event => {
      event.preventDefault()
      if (!input.value.trim()) {
        return
      }
      dispatch(addTodos(input.value))
      input.value = ''
      }}>
      <input ref={node => {
        input = node
      }}/>
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default connect()(AddTo);