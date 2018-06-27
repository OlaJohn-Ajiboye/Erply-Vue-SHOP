// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import accounting from 'accounting'
import Shop from './components/shop/Shop'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.filter('formatMoney', accounting.formatMoney)

/* eslint-disable no-new */

new Vue({
  el: '#shop',
  router,
  store,
  render: h => h(Shop)
})
