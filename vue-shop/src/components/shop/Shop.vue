<template>
  <div id="shop">
    <div class="pads"><PageHeader /></div>

     <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <router-view></router-view>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import PageHeader from './../shared/PageHeader'
import ProductList from './products/ProductList'
import ShoppingCart from './shopping-cart/ShoppingCart'
export default {
  name: 'Shop',
  components: {
    PageHeader,
    ProductList,
    ShoppingCart
  }
}
</script>
<style scoped>
/* style important for making sure the shopping cart remain stucky while scrolling product list . It looked terrible otherwise */
/* Comment out this styling to see what I mean. */
.shoppingcart {
    padding-top :0.05vh;
    padding-right :5%;
    position: fixed;
    overflow-y: auto
}
.pads{
   padding-bottom: 5em;
}
</style>
