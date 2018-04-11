import React from 'react'
import './list.css'

const numbers = [1, 2, 3, 4, 5, 6]
export default class RenderList extends React.Component {
  render() {
    return(
      <ul>
        <ListItems numbers={numbers}></ListItems>
      </ul>
    )
  }
}

function ListItems(props) {
  const numbers = props.numbers
  const mapnumbers = numbers.map((number, index) =>
    <MapNumbers key={index} value={number*20}/>
    // <li key={ index }>{ number * 20 }</li>
    // <li key={number.toString()}>{number*20}</li>
  )
  console.log(mapnumbers)

  return (
    <ul>{mapnumbers}</ul>
  )
}

function MapNumbers(props) {
  return(
    <li>{props.value}</li>
  )
}