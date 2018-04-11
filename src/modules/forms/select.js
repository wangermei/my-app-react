import React from 'react'
import './forms.css'

export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '重庆' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelected = this.handleSelected.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('已选择地区：' + this.state.value)
    alert('已选择地区:' + this.state.value)
  }

  handleSelected (event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          请选择地区：
          <select value={this.state.value} onChange={this.handleSelected}>
            <option value='北京'>北京</option>
            <option value='西安'>西安</option>
            <option value='重庆'>重庆</option>
            <option value='成都'>成都</option>
          </select>
        </label>
        <button>提交</button>
      </form>
    )
  }
}