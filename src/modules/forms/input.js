import React from 'react'
import './forms.css'

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('A name was submitted: ' + this.state.value)
    alert(this.state.value)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input type='input' value={this.state.value} onChange={this.handleChange}/>
        {/*<textarea value={this.state.value} onChange={this.handleChange}></textarea>*/}
        <input type='submit' value='提交'/>
        {/*<button type='submit'>提交</button>*/}
      </form>
    )
  }
}