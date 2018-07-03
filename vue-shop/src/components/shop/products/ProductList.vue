<template>
  <div>
    <div  id="hideMe" class="loader">..Loading Shop</div>
      <div>
      <h3 class="font-weight-bold text-center pad">Products</h3>
       <div class="row" v-for="row in productRows">
       <div class="col-sm-3" v-for="product in row">
        <Product :product="product" track-by="id" />
      </div>
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
  data () {
    return {
      loaderColor: '#80deea',
      loaderSize: '150px'

    }
  },
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
#hideMe {
    -moz-animation: cssAnimation 0s ease-in 5s forwards;
    /* Firefox */
    -webkit-animation: cssAnimation 0s ease-in 5s forwards;
    /* Safari and Chrome */
    -o-animation: cssAnimation 0s ease-in 5s forwards;
    /* Opera */
    animation: cssAnimation 0s ease-in 5s forwards;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}
@keyframes cssAnimation {
    to {
        width:0;
        height:0;
        overflow:hidden;
    }
}
@-webkit-keyframes cssAnimation {
    to {
        width:0;
        height:0;
        visibility:hidden;
    }
}

.loader {
    position: fixed;
    font-size:25px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: url('https://raw.githubusercontent.com/OlaJohn-Ajiboye/Erply-Vue-SHOP/master/vue-shop/src/assets/loader.gif') 50% 50% no-repeat #e0e0e0;
}
.pad{
  padding: 0.5em
}

</style>
