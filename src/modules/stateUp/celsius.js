import React from 'react'
import './celsius.css'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {temperature: ''}
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event) {
    this.setState({
      temperature: event.target.value
    })
  }

  render () {
    const temperature = this.state.temperature
    return (
      <fieldset>
        <legend>输入的温度是：</legend>
        <input type='text' value={this.state.temperature} onChange={this.handleInputChange} />
        <Boiling celsius={parseFloat(temperature)}></Boiling>
      </fieldset>
    )
  }
}

function Boiling(props) {
  if (props.celsius > 100) {
    return <p>温度为{props.celsius}，超过100度，已经开了</p>
  } else {
    return <p>温度为{props.celsius}，未超过100度，没有开</p>
  }
}