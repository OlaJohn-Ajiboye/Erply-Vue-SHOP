<template>
  <div>
    <PageHeader />
    <Toggle />
    <div class="container">
      <Coupons />

      <div class="row mt-2">
        <div class="col-sm-9">
          <ProductList />
        </div>
        <div class="col-sm-3" >
          <ShoppingCart id='cart'/>
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
#cart {
    padding-top :5%;
     padding-right :5%;
    position: fixed;
    top: 0;
    bottom: 0;
}
</style>
