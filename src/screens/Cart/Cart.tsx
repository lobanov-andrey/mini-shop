import ProductCard from 'components/ProductCard/ProductCard'
import { observer } from 'mobx-react-lite'
import { Store } from 'mobx/store'
import React from 'react'
import { cartProductsStyle, cartStyle, cartSummStyle } from './cartStyles'

const Cart = observer(({ store }: { store: Store }) => {
  const { products, summ } = store.cartProducts.reduce<{ products: JSX.Element[]; summ: number }>(
    (accumulator, product) => {
      const productIsExist = store.products.find(productLoop => productLoop.id == product.productID)
      if (productIsExist) {
        accumulator.summ += productIsExist.price * product.count
        accumulator.products.push(<ProductCard key={product.productID} count={product.count} product={productIsExist} />)
      } else {
        accumulator.products.push(<div key={product.productID}>product deleted</div>)
      }
      return accumulator
    },
    { products: [], summ: 0 }
  )

  return (
    <div css={cartStyle}>
      <div css={cartSummStyle}>summ: {summ}</div>
      <div css={cartProductsStyle}>{products}</div>
    </div>
  )
})

export default Cart
