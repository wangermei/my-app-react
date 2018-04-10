import React from 'react';
import { Link } from 'react-router-dom'
import './Test.css';

function Tests(props){
  return (
    <div>
      <h6>Hello!{props.name}</h6>
    </div>
  )
}

function Aoo() {
  return (
    <div>
      <Tests name='sara'/>
      <Tests name='小明'/>
      <Tests name='酸菜'/>
    </div>
  )
}

function Format(date) {
  return date.toLocaleString()
}

function UserInfo(props) {
  return (
    <div className={'userInfo'}>
      <h1>{props.name}</h1>
    </div>
  )
}

function Comment(props) {
  return (
    <div className={'welcome'}>
      <UserInfo name={props.author.name}/>
      {/*<div className={'userInfo'}>*/}
        {/*<h1>{props.author.name}</h1>*/}
      {/*</div>*/}
      <div className={'text'}>
        <h3>{props.text}</h3>
        <h3>{Format(props.date)}</h3>
      </div>
      <div className={'date'}>
          <img src={props.author.authorUrl} alt='dsd'/>
      </div>
      <Link to={'/clock'}>setState</Link>
    </div>
  )
}

const comment = {
  date: new Date(),
  text: 'this is cute miao mi',
  author: {
    name: 'Hello,Kitty',
    authorUrl: 'http://placekitten.com/g/64/64'
  }
}

class Test extends React.Component {
  render() {
    return (
      <div>
        <Aoo/>
        <Comment date={comment.date} text={comment.text} author={comment.author}/>
      </div>
    );
  }
}

export default Test;
