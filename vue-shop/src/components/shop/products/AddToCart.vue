<template>
  <button type="button" class="btn btn-primary"
    :disabled="!product.instock"
    @click="addToCart(product)">
    Add to cart
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddToCart',
  props: {
    product: Object
  },
  methods: mapActions([
    'addToCart'
  ])
}
</script>
<style scoped>
/* disabled icon on mousehover not working by default in bootsrap 4.1.0, this style handles that work around */

button:disabled {
  cursor: not-allowed;
  pointer-events: all !important;
}
</style>
