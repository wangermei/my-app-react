import React from 'react'
import PropTypes from 'prop-types'

const Picker = ({ value, onChange, options }) => {
  return(
    <div>
      <h2>{ value }</h2>
      <select onChange={(event) => onChange(event.target.value)} value={value} >
        { options.map(option =>
          <option value={option} key={option}>
            { option }
          </option>
        )}
      </select>
    </div>
  )
}

Picker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired
}

export default Picker;