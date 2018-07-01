<template>
<div class="container">
  <div class="col-md-12">
  what the fuck
  <!-- {{item.name}} -->
      </div>
    </div>

</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'

export default {
  name: 'ProductDetails',
  props: {
    product: Object
  },

  computed:
   mapGetters(['products']),
  item () {
    console.log(this.product)
    let id = this.$route.params.id
    if (this.products.length >= id) {
      let filterArr = this.products.filter((item) => {
        return item.id == id
      })
      if (filterArr.length > 0) {
        return filterArr[0]
      }
    }
    return {}
  },
  methods: mapActions([
    'getProducts'
  ])
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
