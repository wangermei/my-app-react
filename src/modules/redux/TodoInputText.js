import React from 'react'
import PropTypes from 'prop-types'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text || ''
    }
  }

  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    newTodo: PropTypes.bool
  }

  bandleBlur = event => {
    if (!this.props.newTodo) {
      this.props.onSave(event.target.value)
    }
    console.log(this.props.text)
  }

  bandleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  bandleSubmit = event => {
    const text = event.target.value.trim()
    if (event.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({
          text: ''
        })
      }
    }
  }

  render() {
    return (
      <input
        type='text'
        value={this.state.text}
        placeholder={this.props.placeholder}
        autoFocus='true'
        onBlur={this.bandleBlur}
        onChange={this.bandleChange}
        onKeyDown={this.bandleSubmit} />
    )
  }
}