import React from 'react'
import './controlLogin.css'

const messages = ['React', 'Re: React']
export default class MailBox extends React.Component {
  render() {
    return (
      <div>
        <Mail unreadMessages={messages}/>
      </div>
    )
  }
}

function Mail(props) {
  const unreadMessages = props.unreadMessages
  console.log(unreadMessages.length)

  return (
    <div>
      <h1>Hello</h1>
      {unreadMessages.length > 0 && <h2>you have {unreadMessages.length} unread messages.</h2>}
    </div>
  )
}