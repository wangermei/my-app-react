import React from 'react'
// import './dialog.css'

function ListOfWords (props) {
  return (
    <div>{props.words.join(',')}</div>
  )
}

const styles = {
  fontSize: '28px',
  backgroundColor: 'red',
  color: 'white',
  padding: '15px 0'
}

export  default class WordAdder extends React.Component {
  constructor(props, context) {
    console.log(context)
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 这个部分是不好的风格，造成一个错误
    const words = this.state.words;
    words.push('marklar');
    this.setState({words: words});
  }

  render() {
    return (
      <div style={styles}>
        <ListOfWords words={this.state.words} />
        <button onClick={this.handleClick}>更新数据</button>
      </div>
    );
  }
}