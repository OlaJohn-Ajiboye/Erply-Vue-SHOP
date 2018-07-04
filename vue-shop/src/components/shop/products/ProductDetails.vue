<template>
<div class="container">
  <div class="col-md-12">
   {{ product.name }} <br>
   {{ product.price }}<br>
   {{ product.department }}
      </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProductDetails',
  computed:
  mapGetters(['product'])

}
</script>

<style scoped>
.caption-full {
  padding-right: 10px;
  padding-left: 10px;
}

.ratings {
  padding-right: 10px;
  padding-left: 10px;
  color: #d17581;
}
</style>
