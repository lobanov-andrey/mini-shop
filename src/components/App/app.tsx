import { css, Global } from '@emotion/react'
import Button from 'components/Button/Button'
import NotFound from 'components/NotFound/NotFound'
import store from 'mobx/store'
import normalize from 'modules/normalize'
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AddProduct from 'screens/AddProduct/AddProduct'
import AdminCategory from 'screens/AdminCategory/AdminCategory'
import Cart from 'screens/Cart/Cart'
import Category from 'screens/Category/Category'
import EditProduct from 'screens/EditProduct/EditProduct'
import ProductList from 'screens/ProductList/ProductList'
import { appStyle, headerLogoStyle, headerSearchStyle, headerStyle } from './appStyles'

export default function App() {
  return (
    <div css={appStyle}>
      <Global
        styles={css`
          ${normalize}
          html,
          body {
            font-family: Helvetica, Arial, sans-serif;
          }
          #app {
            background: #fffdf9;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow-x: hidden;
            overflow-y: auto;
          }
          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }
        `}
      />

      <BrowserRouter>
        <div css={headerStyle}>
          <div css={headerLogoStyle}>
            <Link to="/">mini shop</Link>
          </div>
          <div css={headerSearchStyle}>
            <Link to="/admin">
              <Button>admin</Button>
            </Link>
            <Link to="/cart">
              <Button>cart</Button>
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="/category/:categoryID" element={<Category />} />
          <Route path="/cart" element={<Cart store={store} />} />
          <Route path="/admin">
            <Route index element={<AdminCategory store={store} />} />
            <Route path="category/:categoryID" element={<AdminCategory store={store} />} />
            <Route path="addProduct" element={<AddProduct store={store} />} />
            <Route path="editProduct/:productID" element={<EditProduct store={store} />} />
          </Route>
          <Route path="/" element={<ProductList store={store} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
