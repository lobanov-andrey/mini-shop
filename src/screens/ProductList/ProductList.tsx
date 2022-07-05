import Input from 'components/Input/Input'
import ProductCard from 'components/ProductCard/ProductCard'
import { CategoryID } from 'interfaces/Category'
import { observer } from 'mobx-react-lite'
import { Store } from 'mobx/store'
import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  bodyLeftStyle,
  bodyProductsStyle,
  bodyRightStyle,
  bodySearchStyle,
  bodyStyle,
  bodySummStyle,
} from './productListStyles'

const ProductList = observer(({ store, categoryID }: { store: Store; categoryID?: CategoryID }) => {
  const [search, setSearch] = useState('')

  const summ = useMemo(
    () =>
      store.cartProducts.reduce<number>((summ, cartProduct) => {
        const productIsExist = store.products.find(product => product.id == cartProduct.productID)
        if (productIsExist) summ += productIsExist.price * cartProduct.count
        return summ
      }, 0),
    [store.cartProducts, store.products]
  )

  return (
    <div>
      <div css={bodyStyle}>
        <div css={bodyLeftStyle}>
          <Link to="/">all</Link>

          {store.categories.map(category => (
            <Link key={category.id} to={`/category/${category.id}`}>
              {categoryID == category.id ? '> ' : ''}
              {category.name}
            </Link>
          ))}
        </div>
        <div css={bodyRightStyle}>
          <div css={bodySummStyle}>summ: {summ}</div>

          <Input css={bodySearchStyle} placeholder="search" value={search} onChange={event => setSearch(event.target.value)} />
          <div css={bodyProductsStyle}>
            {store.products
              .filter(product => (categoryID ? product.categoryID == categoryID : true))
              .filter(product => product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
              .map(product => {
                const productIsExistInCart = store.cartProducts.find(cartProduct => cartProduct.productID == product.id)
                return <ProductCard key={product.id} count={productIsExistInCart?.count} product={product} />
              })}
          </div>
        </div>
      </div>
    </div>
  )
})

export default ProductList
