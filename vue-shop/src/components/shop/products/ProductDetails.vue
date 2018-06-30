<template>
<div class="container">
  <div class="col-md-12">
  what the fuck
  {{item.name}}
      </div>
    </div>

</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'

export default {
  components: {
  },
  data () {
    return {
      loaderColor: '#5cb85c',
      loaderSize: '50px'
    }
  },
  computed: {
    ...mapGetters(['products']),
    item () {
      let id = this.$route.params.id
      if (this.products.id >= id) {
        let filterArr = this.products.filter((item) => {
          return item.id === id
        })
        if (filterArr.length > 0) {
          return filterArr[0]
        }
      }
      return {}
    }
  },
  methods: {
    ...mapActions(['updateCart']),
    addItem () {
      const order = {
        item: Object.assign({}, this.item),
        quantity: 1,
        isAdd: true
      }
      // console.log(order);
      this.updateCart(order)
    }
  }
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
