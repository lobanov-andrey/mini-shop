import Category from 'interfaces/Category'
import Product from 'interfaces/Product'

export const categoriesMock: Category[] = [
  {
    id: '1',
    name: 'shoes',
  },
  {
    id: '2',
    name: 'hats',
  },
  {
    id: '3',
    name: 'pants',
  },
]

export const productsMock: Product[] = [
  {
    categoryID: '1',
    name: 'adidas',
    price: 100,
    id: '1',
  },
  {
    categoryID: '1',
    name: 'nike',
    price: 150,
    id: '2',
  },
  {
    categoryID: '2',
    name: 'cowboy hat',
    price: 500,
    id: '3',
  },
  {
    categoryID: '2',
    name: 'rapper cap',
    price: 120,
    id: '4',
  },
  {
    categoryID: '3',
    name: 'shorts',
    price: 50,
    id: '5',
  },
  {
    categoryID: '3',
    name: 'casual pants',
    price: 200,
    id: '6',
  },
]
