import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/components/shop/Shop'
import ShoppingCart from '@/components/shop/shopping-cart/ShoppingCart'
import ProductDetails from '@/components/shop/products/ProductDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/product/:id',
      component: ProductDetails,
      name: 'ProductDetails'
    },
    {
      path: '/shoppingcart',
      component: ShoppingCart,
      name: 'ShoppingCart'
    }
  ]
})
