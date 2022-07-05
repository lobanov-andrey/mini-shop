import Button from 'components/Button/Button'
import Textarea from 'components/Textarea/Textarea'
import { observer } from 'mobx-react-lite'
import { addCategory, deleteProduct, removeCategory, Store } from 'mobx/store'
import React, { useCallback, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  adminCategoryActionsStyle,
  adminLeftStyle,
  adminProductActionsStyle,
  adminProductStyle,
  adminRightStyle,
  adminStyle,
} from './adminCategoryStyles'

const AdminCategory = observer(({ store }: { store: Store }) => {
  const [newCategory, setNewCategory] = useState('')

  const { categoryID } = useParams()
  let navigate = useNavigate()

  const createNewCategoryAndClear = useCallback(() => {
    if (newCategory) {
      addCategory(newCategory)
      setNewCategory('')
    }
  }, [newCategory])

  const keyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key == 'Enter') {
        event.preventDefault()
        createNewCategoryAndClear()
      }
    },
    [newCategory]
  )

  const removeCategoryAndRedirect = () => {
    if (categoryID) {
      removeCategory(categoryID)
      navigate('/admin')
    }
  }

  return (
    <div css={adminStyle}>
      <div css={adminLeftStyle}>
        <Link to="/admin">all</Link>
        {store.categories.map(category => (
          <Link to={`/admin/category/${category.id}`}>
            {categoryID == category.id ? '>' : ''}
            {category.name}
          </Link>
        ))}
        <Textarea
          value={newCategory}
          onKeyDown={keyDown}
          onBlur={createNewCategoryAndClear}
          placeholder="new category"
          onChange={event => setNewCategory(event.target.value)}
        />
      </div>
      <div css={adminRightStyle}>
        <div css={adminCategoryActionsStyle}>
          <Link to={`/admin/addProduct?categoryID=${categoryID}`}>
            <Button>add product</Button>
          </Link>
          {categoryID ? <Button onClick={removeCategoryAndRedirect}>delete category</Button> : null}
        </div>

        {store.products
          .filter(product => (categoryID ? categoryID == product.categoryID : true))
          .map(product => (
            <div css={adminProductStyle}>
              <div>name: {product.name}</div>
              <div>price: {product.price} $</div>
              <div css={adminProductActionsStyle}>
                <Link to={`/admin/editProduct/${product.id}`}>
                  <Button>Edit</Button>
                </Link>
                <Button onClick={() => deleteProduct(product.id)}>Delete</Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
})

export default AdminCategory
