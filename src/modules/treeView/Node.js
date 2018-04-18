import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

export class Node extends React.Component {
  handleIncrementClick = () => {
    const { increment, id} = this.props
    increment(id)
  }

  handleRemoveClick = (event) => {
    event.preventDefault()

    const { removeChild, deleteNode, parentId, id } = this.props
    removeChild(parentId, id)
    deleteNode(id)
  }

  handleAddChildClick = (event) => {
    event.preventDefault()

    const { addChild, createNode, id } = this.props
    const child = createNode().nodeId
    addChild(id, child)
  }

  renderChild = (childId) => {
    const { id } = this.props
    return (
      <li key={childId}>
        <ConnectedNode id={childId}  parentId={id} />
      </li>
    )
  }

  render () {
    const { parentId, counter, childIds } = this.props

    return (
      <div>
        Counter: { counter }
        {''}
        <button onClick={this.handleIncrementClick}> + </button>
        {''}
        { typeof parentId !== 'undefined' &&
          <a href='#' onClick={this.handleRemoveClick}>×</a>
        }
        <ul>
          { childIds.map(this.renderChild) }
          <li key='add'>
            <a href='' onClick={this.handleAddChildClick}></a>
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state[ownProps.id]
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode