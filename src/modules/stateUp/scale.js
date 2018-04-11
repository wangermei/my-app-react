import React from 'react'
import './celsius.css'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
export default class Calculator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      temperature: '',
      scale: 'c'
    }
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
  }

  handleCelsiusChange(temperature) {
    this.setState({
      temperature: temperature,
      scale: 'f'
    })
  }

  handleFahreheitChange(temperature) {
    this.setState({
      temperature: temperature,
      scale: 'c'
    })
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

    return (
      <div>
        <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange}></TemperatureInput>
        <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahreheitChange}></TemperatureInput>
      </div>
    )
  }
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {temperature: '0'}
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event) {
    this.props.onTemperatureChange(event.target.value);
    // this.setState({
    //   temperature: event.target.value
    // })
  }

  render () {
    // const temperature = this.state.temperature
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>输入的{scaleNames[scale]}温度是：</legend>
        <input type='text' value={this.state.temperature} onChange={this.handleInputChange} />
        <Boiling celsius={parseFloat(temperature)}></Boiling>
      </fieldset>
    )
  }
}

function Boiling(props) {
  console.log(props.celsius)
  if (props.celsius > 100) {
    return <p>温度为{props.celsius}，超过100度，已经开了</p>
  } else {
    return <p>温度为{props.celsius}，未超过100度，没有开</p>
  }
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius) {
  return(celsius * 9) / 5 + 32
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output*1000)/1000
  return rounded.toString()
}