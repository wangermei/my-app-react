import React from 'react'
import './clicks.css'

function ActionLink() {
  function handleClick(e) {
    e.preventDefault()
    console.log('this link is clicked!')
    alert('this link is clicked!')
  }

  return(
    <div>
      <a href='' onClick={handleClick}>Click me</a>
    </div>
  )
}

export default ActionLink;
