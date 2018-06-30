<template >
  <div>
    <h3 class="text-center ">Shopping Cart</h3>

    <ShoppingCartItem
      v-for="item in items"
      :item="item"
      :key="item.id" />

    <ShoppingCartSummary />

    <div class="mt-1 text-xs-center">
      <button class="btn btn-success"
        @click="buy">
        Checkout
      </button>
    </div>
    <div class="float-right ">
      <router-link :to="{ name: 'ProductList'}" ><button class="btn btn-info font-weight-bold"><i class="fa fa-reply-all"></i> Back to Shop</button></router-link></strong>
    </div>
  </div>
</template>

<script>
import ShoppingCartItem from './ShoppingCartItem'
import ShoppingCartSummary from './ShoppingCartSummary'
import { mapGetters } from 'vuex'

export default {
  name: 'ShoppingCart',
  computed: mapGetters({
    items: 'cartProducts'
  }, ['shoppingcart']),
  components: {
    ShoppingCartItem,
    ShoppingCartSummary
  },
  methods: {
    buy () {
      window.alert('Thanks for Shopping :)')
      window.location.reload()
    }
  }
}
</script>
<style scoped>
.pad{
  padding-bottom: 10px
}
</style>
