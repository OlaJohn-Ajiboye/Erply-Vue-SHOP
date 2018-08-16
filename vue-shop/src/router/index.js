import Vue from 'vue'
import VueRouter from 'vue-router'
import ShoppingCart from '@/components/shop/shopping-cart/ShoppingCart'
import ProductDetails from '@/components/shop/products/ProductDetails'
import ProductList from '@/components/shop/products/ProductList'

Vue.use(VueRouter)

export default new VueRouter({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: ProductList,
      name: 'ProductList'
    },
    {
      path: '/product/:id',
      component: ProductDetails,
      name: 'ProductDetails',
      props: true
    },
    {
      path: '/shoppingcart',
      component: ShoppingCart,
      name: 'ShoppingCart'
    }
  ]
})
