import React from 'react'
import './forms.css'

export default class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    // console.log(this.fileInput.files[0].name)
    // alert(this.fileInput.files[0].name)
    console.log(this.textInput.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          上传文件：
          {/*<input type='file' ref={(input) => {this.fileInput = input}}/>*/}
          <input type='text' ref={(input) => {this.textInput = input}} />
        </label>
        <button type='submit'>提交文件</button>
      </form>
    )
  }
}

