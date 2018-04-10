import React from 'react'
import './click.css'

function ActionLink() {
  function handeClick(e) {
    e.preventDefault()
    console.log('this link is clicked!')
    alert('this link is clicked!')
  }

  return(
    <div>
      <a href='#' onClick={handeClick}>Click me</a>
    </div>
  )
}

export default ActionLink;
