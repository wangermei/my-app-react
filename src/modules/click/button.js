import React from 'react'
import './click.css'

class ActionButton extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      isToggleOn: true
    }
  }

  handeClick () {

  }

  render () {
    return(
      <div>
        <button onClick={this.handeClick}>
          { this.state.isToggleOn ? 'ON' : 'OFF' }
        </button>
      </div>
    );
  }
}

export default ActionButton;
