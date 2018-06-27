<template>
  <button type="button" @click="removeFromCart(product)"
   <i class="fa fa-close"></i>
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'RemoveFromCart',
  props: {
    product: Object
  },
  methods: mapActions([
    'removeFromCart'
  ])
}
</script>
<style>
.fa{
  color:red;
  font-size:20px
}
</style>
