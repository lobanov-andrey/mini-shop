import Button from 'components/Button/Button'
import Input from 'components/Input/Input'
import Select from 'components/Select/Select'
import { CategoryID } from 'interfaces/Category'
import { observer } from 'mobx-react-lite'
import { addProduct, Store } from 'mobx/store'
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { addProductStyle } from './addProductStyles'

const AddProduct = observer(({ store }: { store: Store }) => {
  let [searchParams, setSearchParams] = useSearchParams()
  const productCategoryFromSearch = store.categories.find(category => category.id == searchParams.get('categoryID'))

  const [productCategoryID, setProductCategoryID] = useState<CategoryID | undefined>(
    productCategoryFromSearch ? productCategoryFromSearch.id : store.categories[0]?.id
  )
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState(100)

  let navigate = useNavigate()

  const addProductAndRedirect = () => {
    if (!productCategoryID) return alert('choose category ')
    if (!productName) return alert('fill name ')
    if (!productPrice) return alert('fill price ')

    addProduct({
      name: productName,
      price: productPrice,
      categoryID: productCategoryID,
    })

    navigate(`/admin/category/${productCategoryID}`)
  }

  return (
    <div css={addProductStyle}>
      <div>
        <Input value={productName} onChange={event => setProductName(event.target.value)} placeholder="name" />
      </div>
      <div>
        <Input
          value={productPrice}
          onChange={event => setProductPrice(Number(event.target.value))}
          type={'number'}
          placeholder="price"
        />
      </div>
      <div>
        category:
        <Select
          value={productCategoryID}
          onChange={id => setProductCategoryID(id)}
          options={store.categories.map(category => ({ text: category.name, id: category.id }))}
        />
      </div>
      <div>
        <Button onClick={addProductAndRedirect} fullWidth={true}>
          add product
        </Button>
      </div>
    </div>
  )
})

export default AddProduct
