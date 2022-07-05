import Button from 'components/Button/Button'
import Textarea from 'components/Textarea/Textarea'
import Product from 'interfaces/Product'
import { addProductToCart, minusProductToCart, plusProductToCart, removeProductFromCart } from 'mobx/store'
import React from 'react'
import { productCardStyle } from './productCardStyles'

export default function ProductCard({ product, count }: { product: Product; count?: number }) {
  return (
    <div css={productCardStyle}>
      <div>name: {product.name}</div>
      <div>price: {product.price} $</div>
      <div>
        {typeof count == 'number' && count ? (
          <>
            <Button onClick={() => minusProductToCart(product.id)}>-</Button> {count}{' '}
            <Button onClick={() => plusProductToCart(product.id)}>+</Button>{' '}
            <Button onClick={() => removeProductFromCart(product.id)}>clear</Button>
          </>
        ) : (
          <>
            <Button onClick={() => addProductToCart(product.id)}>add to cart</Button>
          </>
        )}
      </div>
    </div>
  )
}
