<template>
  <nav class="navbar  navbar-light bg-faded fixed-top " >
    <div class="container">
      <a class="navbar-brand font-weight-bold navbar-static-top header" href="/">Erply-Shop</a>
      <span class="navbar-text float-xs-right cart">
         <strong class="cart"><router-link class="cart" :to="{ name: 'ShoppingCart'}" ><button class="btn btn-success cart-text">{{itemsQuantity}}(Items)<i class="fa fa-cart-plus cart"></i></button></router-link></strong>
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
background-color:#e0e0e0 ;
-webkit-box-shadow: 10px 6px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 6px 5px 0px rgba(0,0,0,0.75);
box-shadow: 10px 6px 5px 0px rgba(0,0,0,0.75);
}
.cart{
color: black;
font-size:18px
}
.cart-text{
 font-size:18px;
 font-weight: bold;
 color: black;
}
.header{
  font-family: 'Shrikhand', cursive;
  font-size:25px
}
</style>
