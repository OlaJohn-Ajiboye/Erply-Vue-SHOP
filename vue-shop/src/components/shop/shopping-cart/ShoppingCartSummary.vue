<template>
  <ul class="list-group">
    <li class="list-group-item">
    {{itemsQuantity}} {{'item' | pluralize(itemsQuantity) }}: {{subtotal | formatMoney}}
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
    ]),
    totalWithDiscount () {
      let total = this.$store.getters.total
      return total > 0 ? this.total : 0
    }
  }
}
</script>
