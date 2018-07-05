<template>
<div class="pad">
  <div class="card text-xs-center">
    <img class="card-img-top img-responsive zoom" :src="product.image">
    <div class="card-body">
     <a @click="singleProduct(product)" href="javascript:void(0)"><h5 @click="gotoDetails" class="card-title text-truncate">{{product.name}}</h5></a>
      <p class="card-text font-weight-bold"> {{product.price | formatMoney}} <span v-show="!product.instock" class='outofstock'> Out of Stock</span></p>
      <AddToCart :product="product" class="float-right"/>
    </div>
  </div>
</div>
</template>

<script>
import AddToCart from './AddToCart'
import {mapActions} from 'vuex'

export default {
  name: 'Product',
  props: {
    product: Object
  },
  components: { AddToCart },
  methods: {
    ...mapActions(['addToCart', 'singleProduct']),
    gotoDetails () {
      this.$router.push('/product/' + this.product.id)
    }
  }
}
</script>

<style scoped>
.card img{
  height: 50%;
  width: 100%;
  overflow: hidden;
  transition: transform .2s;
}
.pad{
  padding-bottom: 1em
}
.card img:hover{
  transform: scale(1.2);
  z-index: 1060
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
