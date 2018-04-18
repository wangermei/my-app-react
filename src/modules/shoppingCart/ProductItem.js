import React from 'react'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <Product
        title={ product.title }
        price={ product.price }
        quantity={ product.inventory } />
      <button
        onClick={ onAddToCartClicked }
        disabled={ product.inventory > 0 ? '' : 'disabled' }>
        { product.inventory > 0 ? 'Add To Cart' : 'Sold To Cart' }
      </button>
    </div>
  )
}

export default ProductItem