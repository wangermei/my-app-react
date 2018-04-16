import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoInputText from './TodoInputText'

export default class TodoItem extends React.Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }

  banleDoubleClick = () => {
    this.setState({
      editing: true
    })
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      element = <TodoInputText
                  text={todo.text}
                  editing={this.state.editing}
                  onSave={(text) => this.handleSave(todo.id, text)} />
    } else {
      element =
        <div>
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)} />
          <label onDoubleClick={this.banleDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy" onClick={() => deleteTodo(todo.id)}>删除</button>
        </div>
    }

    return (
      <li className={classnames({
        compeleted: todo.compeleted,
        editing: this.state.editing
      })}>
        { element }
      </li>
    )
  }
}