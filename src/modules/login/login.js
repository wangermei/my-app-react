import React from 'react'
import './login.css'

class Login extends React.Component {
  render() {
    return (
      <div>
        <Greeting isToggleIn={false}/>
        <Greeting isToggleIn={true}/>
      </div>
    )
  }
}

function UserGreeting() {
  return <h1>welcome user</h1>
}

function GustGreeting() {
  return <h1>welcome Gust</h1>
}

function Greeting(props) {
  const isToggleIn = props.isToggleIn;
  console.log(isToggleIn)

  if (isToggleIn) {
    return <UserGreeting></UserGreeting>
  } else {
    return <GustGreeting></GustGreeting>
  }
  // return (
  //   isToggleIn ? <UserGreeting></UserGreeting> : <GustGreeting></GustGreeting>
  // )

}

export default Login;