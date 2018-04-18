import React from 'react'
import ProductContainer from './ProductContainer'
import CartContainer from './CartContainer'

const App = () => {
  return (
    <div>
      <h2>Shopping cart Example</h2>
      <hr/>
      <ProductContainer/>
      <hr/>
      <CartContainer/>
    </div>
  )
}


export default App