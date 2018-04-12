import React from 'react'
import './dialog.css'

function FancyBorder(props) {
  return(
    <div className={props.color}>
      {props.children}
    </div>
  )
}

function Diglog(props) {
  return(
    <FancyBorder color='blue'>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
      {props.children}
    </FancyBorder>
  )
}

export default class SignUpDialog extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state={ login: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleChange (event) {
    this.setState({
      login: event.target.value
    })
  }

  handleSignUp() {
    alert('welcome sign up' + this.state.login)
  }

  render() {
    return(
      <Diglog
        title='Welcome'
        message='Thank you for visiting our spacecraft!'>
        <input value={this.state.login} onChange={this.handleChange}/>
        <button onClick={this.handleSignUp}>Sign Up Me</button>
      </Diglog>
    )
  }
}