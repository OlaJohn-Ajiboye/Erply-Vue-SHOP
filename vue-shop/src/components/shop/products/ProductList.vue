<template>
  <div>
    <h3 class="d-inline">Products</h3>
     <h3 class="d-inline float-xs-right sticky"><strong class="cart"><router-link class="cart" :to="{ name: 'ShoppingCart'}" >{{itemsQuantity}}<i class="fa fa-cart-plus cart"></i></router-link></strong></h3>
    <div class="row" v-for="row in productRows">
      <div class="col-sm-4" v-for="product in row">
        <Product :product="product" track-by="id" />
      </div>
    </div>
  </div>
</template>

<script>
import Product from './Product'
import { mapActions, mapState } from 'vuex'
import chunk from 'chunk'
export default {
  name: 'ProductList',
  computed: mapState({
    productRows: state => chunk(state.products.all, 3)
  }),
  methods: mapActions([
    'getProducts'
  ]),
  components: { Product },
  created () {
    this.getProducts()
  }
}
</script>
<style scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 5px;
}
</style>
