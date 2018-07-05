<template>
<div>
  <div id="hideMe" class="loader pad">..Loading Shop</div>
  <div>
    <h3 class="font-weight-bold text-center pad">Products</h3>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label class="font-weight-bold" for="">Filter by Stock</label>
            <select class="form-control" @input="filterStock" v-model="instock">
              <option value="false">Out of Stock</option>
              <option value="true">In Stock</option>
            </select>
          </div>
        </div>
        <div class="col">
          <div class="form-group ">
            <label class="font-weight-bold" for="">Filter by Store</label>
            <select class="form-control" @input="filterStore" v-model="store">
              <option value="Finland">Finland</option>
              <option value="Estonia">Estonia</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-3" v-for="product in dataModel">
          <Product :product="product" :key="product.id" track-by="id" />
        </div>
        <div class="pagination-item ">
          <button class="btn btn-success btn-lg" :disabled="! showPrev || ! pagination" @click="renderList(params.current_page-1)">Prev</button>
          <button class="btn btn-success btn-lg" :disabled="! showNext || ! pagination" @click="renderList(params.current_page+1)">Next</button>
        </div>
      </div>
   </div>
</div>
</div>
</template>

<script>
import api from './../../../api/fixtures'
import Product from './Product'
import { mapActions } from 'vuex'
export default {
  components: {Product},
  data () {
    return {
      pagination: true,
      model: [],
      dataModel: [],
      store: '',
      instock: '',
      params: {
        per_page: 12, // products per page
        from: 1,
        to: 2,
        current_page: null
      }
    }
  },
  mounted () {
    // download products from api and send it to model
    api.getProducts(products => {
      this.model = products
      this.renderList() // to set up pagination
    })
  },
  methods: {
    renderList (pageNumber = 1) {
      this.dataModel = []
      if (this.model.length) {
        this.params.from = pageNumber
        for (let i = this.start; i <= this.stop; i++) {
          this.dataModel.push(this.model[i])
        }
        this.params.current_page = this.params.from
        this.storeProducts(this.dataModel)// call storeProducts function and send dataModel to vuex
      }
    },
    ...mapActions(['storeProducts']),
    filterStore (e) {
      // var self = this
      const userFilter = this.model.filter((mode) => {
        if (this.instock !== '') {
          return mode.store === e.target.value && mode.instock.toString() === this.instock
        }
        return mode.store === e.target.value
      })
      this.dataModel = userFilter
    },

    filterStock (e) {
      const userFilter = this.model.filter((mode) => {
        if (this.store !== '') {
          return mode.instock.toString() === e.target.value && mode.store === this.store
        }
        return mode.instock.toString() === e.target.value
      })
      this.dataModel = userFilter
    }
  },
  computed: {
    start () {
      return (this.params.from - 1) * this.params.per_page
    },
    total () {
      return this.model.length && (this.model.length > this.params.per_page) ? Math.ceil(this.model.length / this.params.per_page) : 1
    },
    stop () {
      if ((this.model.length - this.start) >= this.params.per_page) {
        return (this.params.from * this.params.per_page) - 1
      } else {
        return this.model.length - 1
      }
    },
    showNext () {
      return this.params.current_page < this.total
    },
    showPrev () {
      return this.params.current_page > 1
    }
  }
}
</script>

<style scoped>
#hideMe {
    -moz-animation: cssAnimation 0s ease-in 3s forwards;
    /* Firefox */
    -webkit-animation: cssAnimation 0s ease-in 3s forwards;
    /* Safari and Chrome */
    -o-animation: cssAnimation 0s ease-in 3s forwards;
    /* Opera */
    animation: cssAnimation 0s ease-in 3s forwards;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}
@keyframes cssAnimation {
    to {
        width:0;
        height:0;
        overflow:hidden;
    }
}
@-webkit-keyframes cssAnimation {
    to {
        width:0;
        height:0;
        visibility:hidden;
    }
}

.loader {
    position: fixed;
    font-size:25px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: url('https://raw.githubusercontent.com/OlaJohn-Ajiboye/Erply-Vue-SHOP/master/vue-shop/src/assets/loader.gif') 50% 50% no-repeat #e0e0e0;
}
.pad{
  padding: 0.5em
}
.pagination-item{
  padding-bottom: 2em;
  margin: 0 auto;
}
.btn{
  padding-right: 2em;
  padding-left: 2em;
  text-align: center;
}
</style>
