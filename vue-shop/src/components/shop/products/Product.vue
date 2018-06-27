<template>
  <div class="card text-xs-center">
    <img class="card-img-top " :src="product.image">

    <div class="card-block">
      <h5 class="card-title ">{{product.name}}</h5>
      <p class="card-text font-weight-bold"> {{product.price | formatMoney}} <span v-show="!product.instock" class='outofstock'> Out of Stock</span></p>
      <AddToCart :product="product" />
    </div>
  </div>
</template>

<script>
import AddToCart from './AddToCart'

export default {
  name: 'Product',
  props: {
    product: Object
  },
  components: { AddToCart }
}
</script>

<style scoped>
 .card img{
    height: 50%;
    width: 100%;
    overflow: hidden;
}

.card h5{
    cursor:pointer;
}

.card{
    height: 350px;
    max-width: 100%;
}
.outofstock{
  text-decoration: line-through;
  color:red;
  padding-left: 10px;
}
</style>
