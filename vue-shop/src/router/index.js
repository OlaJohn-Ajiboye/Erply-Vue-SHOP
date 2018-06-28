import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/shop/products/ProductList'
import ShoppingCart from '@/components/shop/shopping-cart/ShoppingCart'
import ProductDetails from '@/components/shop/products/ProductDetails'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/product/:id',
    component: ProductDetails,
    name: 'product'
  },
  {
    path: '/cart',
    component: ShoppingCart,
    name: 'shoppingcart'
  }
  ]
})
