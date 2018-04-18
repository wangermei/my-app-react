import React from 'react'

const Product = ({ title, price, quantity }) => (
  <div>
    { title } - ${ price } ×{ quantity }
  </div>
)

export default Product