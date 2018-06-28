<template>
  <nav class="navbar  navbar-light bg-faded fixed-top " >
    <div class="container">
      <a class="navbar-brand font-weight-bold" href="/">Erply-Shop</a>
      <span class="navbar-text float-xs-right">
         <strong class='hidden-md-up '><router-link :to="{ name: 'ShoppingCart'}" >{{itemsQuantity}}Cart</router-link></strong>
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
.fixed-top{

}
</style>
