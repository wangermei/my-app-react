import React from 'react'
import './controlLogin.css'

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleIn: false };
    this.handleLogOutClick = this.handleLogOutClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick () {
    this.setState({
      isToggleIn: true
    })
  }

  handleLogOutClick () {
    this.setState({
      isToggleIn: false
    })
  }

  render() {
    const isLToggleIn = this.state.isToggleIn;

    let button = isLToggleIn ? <LogOutButton onclick={this.handleLogOutClick} /> : <LoginButton onclick={this.handleLoginClick} />
    // if (isLToggleIn) {
    //   button = <LogOutButton onclick={this.handleLogOutClick} />;
    // } else {
    //   button = <LoginButton onclick={this.handleLoginClick} />;
    // }
    return (
      <div className={'controlLogin'}>
        {button}
        <Greeting isToggleIn={this.state.isToggleIn} />
      </div>
    )
  }
}

function LoginButton(props) {
  return (
    <button className={'btn'} onClick={props.onclick}>Login</button>
  )
}

function LogOutButton(props) {
  return (
    <button className={'btn'} onClick={props.onclick}>logout</button>
  )
}

function Greeting(props) {
  const isToggleIn = props.isToggleIn;
  console.log(isToggleIn)

  return isToggleIn ? <LoginGreeting></LoginGreeting> : <LogOutGreeting></LogOutGreeting>
}

function LoginGreeting() {
  return <h1>welcome comeback</h1>
}

function LogOutGreeting() {
  return <h1>welcome sLogout</h1>
}

