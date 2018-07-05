<template>
<div class="pad">
  <div class="card text-xs-center">
    <img class="card-img-top img-responsive zoom" :src="product.image">
    <div class="card-body">
      <h5 class="card-title">{{product.name}}</h5>
      <p class="card-text font-weight-bold"> {{product.price | formatMoney}} <span v-show="!product.instock" class='outofstock'> Out of Stock</span></p>
       <h5 class="card-title tex-justify ">{{product.description}}</h5>
       <h5 class="card-title tex-justify ">Store: {{product.store}}</h5>
      <AddToCart :product="product" class="float-right"/>
    </div>
   </div>
  <div class="float-right pad">
 <router-link :to="{ name: 'ProductList'}" ><button class="btn btn-info font-weight-bold"><i class="fa fa-reply-all"></i> Back to Shop</button></router-link>
</div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddToCart from './AddToCart'

export default {
  name: 'ProductDetails',
  components: { AddToCart },
  computed:
  mapGetters(['product']),
  methods: {
    ...mapActions(['addToCart'])
  }

}
</script>

<style scoped>
.pad{
  padding-bottom: 1em;
  padding-top: 5em
}
.card h5{
  cursor:pointer;
}

.card{
  height: 500px;
  max-width: 100%;
}
.outofstock{
  text-decoration: line-through;
  color:red;
  padding-left: 10px;
}
</style>
