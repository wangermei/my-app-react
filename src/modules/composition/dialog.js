import React from 'react'
import './dialog.css'

// function FancyBorder(props) {
//   console.log(props.children)
//   return(
//     <div className={props.color}>
//       {props.children}
//     </div>
//   )
// }
//
// function WelcomeDialog() {
//   return (
//     <FancyBorder color='blue'>
//       <h1>Welcome</h1>
//       <p>Thank you for visiting our spacecraft!</p>
//     </FancyBorder>
//   )
// }

function FancyBorder(props) {
  console.log(props.children)
  return(
    <div className={props.color}>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  )
}

function WelcomeDialog() {
  return (
    <FancyBorder color='blue' title='Welcome' message='Thank you for visiting our spacecraft!'/>
  )
}

export default WelcomeDialog;