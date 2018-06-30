<template>
  <div class="media mb-1">
    <div class="media-left">
      <img class=" cart-img pad" :src="item.image">
    </div>
    <div class="media-body ">
      <strong class="d-block pad">{{item.name}}</strong>
      <span class="pad">Quantity: {{item.quantity}} - {{item.price | formatMoney}}</span>
    </div>
    <div class="media-right align-middle pad">
      <RemoveFromCart :product="item" />
    </div>
  </div>
</template>

<script>
import RemoveFromCart from './../products/RemoveFromCart'

export default {
  name: 'ShoppingCartItem',
  props: {
    item: Object
  },
  components: { RemoveFromCart }
}
</script>

<style scoped>
  .cart-img {
    height: 50px;
    width: 50px;
  }
  .pad {
    padding: 5px 5px;
  }
</style>
