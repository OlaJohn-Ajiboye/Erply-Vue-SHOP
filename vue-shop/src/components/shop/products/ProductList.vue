<template>
  <div>
    <h3 class="font-weight-bold text-center pad">Products</h3>
    <div class="row" v-for="row in productRows">
      <div class="col-sm-3" v-for="product in row">
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
  props: {
    product: Object
  },
  computed: mapState({
    productRows: state => chunk(state.products.all, 4)
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
.pad{
  padding: 0.5em
}
</style>
