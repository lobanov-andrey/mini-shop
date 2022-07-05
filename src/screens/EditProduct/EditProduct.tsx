import Button from 'components/Button/Button'
import Input from 'components/Input/Input'
import NotFound from 'components/NotFound/NotFound'
import Select from 'components/Select/Select'
import { CategoryID } from 'interfaces/Category'
import { observer } from 'mobx-react-lite'
import { saveProduct, Store } from 'mobx/store'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editProductStyle } from './EditProductStyles'

const EditProduct = observer(({ store }: { store: Store }) => {
  const params = useParams()
  const product = store.products.find(product => product.id == params.productID)
  if (!product) {
    return <NotFound />
  }

  const [productCategoryID, setProductCategoryID] = useState<CategoryID>(product.categoryID)
  const [productName, setProductName] = useState(product.name)
  const [productPrice, setProductPrice] = useState(product.price)

  let navigate = useNavigate()

  const addProductAndRedirect = () => {
    if (!productCategoryID) return alert('choose category ')
    if (!productName) return alert('fill name ')
    if (!productPrice) return alert('fill price ')

    saveProduct(product.id, {
      name: productName,
      price: productPrice,
      categoryID: productCategoryID,
    })

    navigate(`/admin/category/${productCategoryID}`)
  }

  return (
    <div css={editProductStyle}>
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
          save product
        </Button>
      </div>
    </div>
  )
})

export default EditProduct
