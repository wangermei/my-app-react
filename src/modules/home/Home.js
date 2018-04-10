import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className='welcome'>
          Welcome To My React
        </div>
        <div className='login'>
          <form>
            <h5>登录</h5>
            <div>
              <label>账号</label>
              <input type='text'/>
            </div>
            <div>
              <label>密码</label>
              <input type='password'/>
            </div>
            <Link to={'/test'}>登录</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
