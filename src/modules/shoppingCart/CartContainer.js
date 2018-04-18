import React from 'react'
import { connect } from 'react-redux'
import { getCartProducts, getTotal } from '../../reducer'
import { checkout } from '../../actions'
import Cart from './Cart'

const CartContainer = ({ products, total, checkout }) => {
  // console.log(products)
  return (
    <Cart
      products={ products }
      total={ total }
      onCheckoutClicked={() => checkout(products)} />
  )
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)