<template>
  <div class="media mb-1">
    <div class="media-left">
      <img class="card-img-top cart-img " :src="item.image">
    </div>
    <div class="media-body">
      <strong class="d-block">{{item.name}}</strong>
      <span>Quantity: {{item.quantity}} - {{item.price | formatMoney}}</span>
    </div>
    <div class="media-right align-middle">
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
</style>
