import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './shop/actions'
import * as getters from './shop/getters'
import products from './shop/modules/products'
import shoppingCart from './shop/modules/shopping-cart'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    products,
    shoppingCart
  },
  strict: debug
})
