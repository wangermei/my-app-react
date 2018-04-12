import React from 'react'
import './dialog.css'

function Connect() {
  return <div className={'left'}></div>
}

function Chat() {
  return <div className={'right'}></div>
}

function SpitPane(props) {
  return(
    <div className={'spit'}>
      <div className={'spitLeft'}>
        {props.left}
      </div>
      <div className={'spitRight'}>
        {props.right}
      </div>
    </div>
  )
}

function App() {
  return(
    <SpitPane left={ <Connect/> } right={ <Chat/> } />
  )
}

export default App;