import React from 'react'
import TodoInputText from './TodoInputText'

export default class Header extends React.Component{
  render () {
    return(
      <header>
        <h1>TODOS</h1>
        <TodoInputText
          newTodo
          onSave={(text) => {
            if (text.length !== 0) {
              this.props.addTodo(text)
            }
          }}
          placeholder='please input you text'
        />
      </header>
    )
  }
}