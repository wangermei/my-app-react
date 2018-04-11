import React from 'react'
import './controlLogin.css'

export default class Warn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick () {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }))
    // this.setState({
    //   showWarning: !this.state.showWarning
    // })
  }

  render() {
    console.log(this.state.showWarning)
    return (
      <div>
        <Warnging warn={this.state.showWarning}/>
        <button className={'warnBtn'} onClick={this.handleButtonClick}>
          {this.state.showWarning ? 'Show' : 'Hide'}
        </button>
      </div>
    )
  }
}

function Warnging(props) {
  if (!props.warn) {
    return null
  }

  return(
    <div className={'warn'}>warning</div>
  )
}