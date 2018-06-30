<template>
  <div id="shop">
      <Pageheader />
         <div class="row">
          <div class="col-md-12">
          <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import PageHeader from './../shared/PageHeader'
export default {
  name: 'shop',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.danger-alert {
  color: red;
}
</style>
