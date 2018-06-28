<template>
  <nav class="navbar  navbar-light bg-faded fixed-top " >
    <div class="container">
      <a class="navbar-brand font-weight-bold navbar-static-top" href="/">Erply-Shop</a>
      <span class="navbar-text float-xs-right cart">
         <strong class="cart"><router-link class="cart" :to="{ name: 'ShoppingCart'}" >{{itemsQuantity}}<i class="fa fa-cart-plus cart"></i></router-link></strong>
      </span>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'PageHeader',
  computed: mapGetters(
    ['itemsQuantity'])
}
</script>
<style scoped>
.navbar {
    background-color:rgb(173, 202, 202);
}
.cart{
color:green;
font-size:20px
}
.fixed-top {
  position: fixed
}
</style>
