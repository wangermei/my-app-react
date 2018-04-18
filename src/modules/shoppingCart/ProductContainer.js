import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../actions'
import { getVisibleProducts } from '../../reducer/products'
import ProductsList from './ProductsList'
import ProductItem from './ProductItem'

function ProductsContainer({ products, addToCart }) {
  return (
    <ProductsList title='Products'>
      {products.map(product =>
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => addToCart(product.id)}/>
      )}
    </ProductsList>
  )
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart }
) (ProductsContainer)