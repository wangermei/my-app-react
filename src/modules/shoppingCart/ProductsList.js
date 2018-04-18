import React from 'react'

const ProductsList = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    <div>{children}</div>
  </div>
)

export default ProductsList