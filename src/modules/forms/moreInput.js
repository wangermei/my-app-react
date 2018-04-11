import React from 'react'
import './forms.css'

export default class MoreInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGusts: 2
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    console.log(value)
    console.log(name)

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form>
        <label>
          Is Going:
          <input type='checkbox' name='isGoing' checked={this.state.isGoing} onChange={this.handleInputChange}/>
        </label>
        <br/>
        <label>
          Number of Gust:
          <input type='number' name='numberOfGusts' value={this.state.numberOfGusts} onChange={this.handleInputChange}/>
        </label>
        <button type='submit'>提交</button>
      </form>
    )
  }
}