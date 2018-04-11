import React from 'react'
import './clicks.css'

class ActionButton extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      isToggleOn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render () {
    return(
      <div>
        <button onClick={this.handleClick}>
          { this.state.isToggleOn ? 'ON' : 'OFF' }
        </button>
      </div>
    );
  }
}

export default ActionButton;
