<template>
  <div id="shop">
    <div class="header"><PageHeader /></div>

     <div class="container">
      <div class="row mt-2">
        <div class="col-sm-9">
          <router-view></router-view>
          </div>
        </div>
      </div>
    <div class="container">
      <div class="row mt-2">
        <div class="col-sm-9">
          <ProductList />
        </div>
        <div class="col-sm-3 sticky-top  " >
          <ShoppingCart class='shoppingcart'/>
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
.header{
  padding-bottom:5em;
}
</style>
