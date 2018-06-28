<template>
  <ul class="list-group">
    <li class="list-group-item cart">
    {{itemsQuantity}} {{'items'}} added to Cart
    </li>
    <li class="list-group-item">
      <strong>Total:</strong>
      <strong > {{subtotal | formatMoney}}</strong>
    </li>
  </ul>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'ShoppingCartSummary',
  computed: {
    ...mapGetters([
      'itemsQuantity',
      'subtotal',
      'total'
    ])
  }
}
</script>
<style scoped>
.cart{
  font-style: italic;
  font-weight:600;
}
</style>
