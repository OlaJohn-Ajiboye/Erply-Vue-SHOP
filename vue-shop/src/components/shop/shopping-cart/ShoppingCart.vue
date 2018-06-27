<template>
  <div>
    <h3>Shopping Cart</h3>

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
  }),
  components: {
    ShoppingCartItem,
    ShoppingCartSummary
  },
  methods: {
    buy () {
      window.alert('You bought :)')
      window.location.reload()
    }
  }
}
</script>
