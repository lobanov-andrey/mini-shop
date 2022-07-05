import CartProducts from 'interfaces/CartProducts'
import Category, { CategoryID } from 'interfaces/Category'
import Product, { ProductID } from 'interfaces/Product'
import { makeAutoObservable } from 'mobx'
import { categoriesMock, productsMock } from './mockData'

export class Store {
  products: Product[] = productsMock
  categories: Category[] = categoriesMock
  cartProducts: CartProducts[] = []

  constructor() {
    makeAutoObservable(this)

    this.addProductToCart = this.addProductToCart.bind(this)
    this.removeProductFromCart = this.removeProductFromCart.bind(this)
    this.plusProductToCart = this.plusProductToCart.bind(this)
    this.minusProductToCart = this.minusProductToCart.bind(this)
    this.addCategory = this.addCategory.bind(this)
    this.removeCategory = this.removeCategory.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
    this.addProduct = this.addProduct.bind(this)
    this.saveProduct = this.saveProduct.bind(this)
  }

  addCategory(name: string) {
    this.categories = [...this.categories, { id: `${Date.now()}`, name }]
  }
  removeCategory(categoryID: CategoryID) {
    this.products = this.products.filter(product => product.categoryID != categoryID)
    this.categories = this.categories.filter(category => category.id != categoryID)
  }
  deleteProduct(productID: ProductID) {
    this.products = this.products.filter(product => product.id != productID)
  }
  addProduct({ name, price, categoryID }: { name: string; price: number; categoryID: CategoryID }) {
    this.products = [
      {
        categoryID,
        name,
        price,
        id: `${Date.now()}`,
      },
      ...this.products,
    ]
  }
  saveProduct(productID: ProductID, updatedData: { name: string; price: number; categoryID: CategoryID }) {
    this.products = this.products.map(product => {
      if (product.id == productID) {
        return {
          ...product,
          ...updatedData,
        }
      }
      return product
    })
  }

  addProductToCart(productID: ProductID) {
    const productCartIsExist = this.cartProducts.find(cartProduct => cartProduct.productID == productID)
    if (productCartIsExist) {
      this.cartProducts = this.cartProducts.map(cartProduct => {
        if (cartProduct.productID == productID) {
          return {
            ...cartProduct,
            count: ++cartProduct.count,
          }
        }
        return cartProduct
      })
    } else {
      this.cartProducts = [...this.cartProducts, { productID, count: 1 }]
    }
  }
  removeProductFromCart(productID: ProductID) {
    this.cartProducts = this.cartProducts.filter(product => product.productID != productID)
  }
  plusProductToCart(productID: ProductID) {
    this.cartProducts = this.cartProducts.map(product => {
      if (product.productID == productID) {
        return {
          ...product,
          count: ++product.count,
        }
      }
      return product
    })
  }
  minusProductToCart(productID: ProductID) {
    this.cartProducts = this.cartProducts.reduce<CartProducts[]>((products, product) => {
      if (product.productID == productID) {
        const count = --product.count
        if (count) {
          products.push({
            ...product,
            count,
          })
        } else {
          this.removeProductFromCart(productID)
        }
      } else {
        products.push(product)
      }
      return products
    }, [])
  }
}

const store = new Store()

export const {
  addProductToCart,
  removeProductFromCart,
  plusProductToCart,
  minusProductToCart,
  addCategory,
  removeCategory,
  deleteProduct,
  addProduct,
  saveProduct,
} = store

export default store
