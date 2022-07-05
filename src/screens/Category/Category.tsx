import store from 'mobx/store'
import React from 'react'
import { useParams } from 'react-router-dom'
import ProductList from 'screens/ProductList/ProductList'

export default function Category() {
  const params = useParams()
  return <ProductList store={store} categoryID={params.categoryID} />
}
