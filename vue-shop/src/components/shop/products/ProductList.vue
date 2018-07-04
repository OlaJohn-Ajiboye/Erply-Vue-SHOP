<template>
  <div>
    <div  id="hideMe" class="loader pad">..Loading Shop</div>
      <div>
      <h3 class="font-weight-bold text-center pad">Products</h3>
        <div class="col-sm-3" v-for="product in dataModel">
        <Product :product="product" :key="product.id" track-by="id" />
      </div>
      <div class="container row">
      <div class="col-md-6 col-md-offset-4">
        <div class="pagination-item">
						<button class="btn btn-success btn-sm" :disabled="! showPrev || ! pagination" @click="renderList(params.current_page-1)">Prev</button>
						<button class="btn btn-success btn-sm" :disabled="! showNext || ! pagination" @click="renderList(params.current_page+1)">Next</button>
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
    filterStore () {
      this.pagination = false
      var self = this
		    const userFilter = this.model.filter(function (mode) {
		       		return mode.store.toLowerCase().indexOf(self.store.toLowerCase()) >= 0
		       	})
		       	this.dataModel = userFilter
    },
    filterStock () {
      this.pagination = false
      var self = this
		    const userFilter = this.model.filter(function (mode) {
		       		return mode.instock.toLowerCase().indexOf(self.instock.toLowerCase()) >= 0
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
.pad{
  padding: 0.5em
}
</style>
