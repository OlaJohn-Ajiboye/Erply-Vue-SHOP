const state = {
  all: [],
  product: {}
}

const mutations = {
  RECEIVE_PRODUCTS (state, products) {
    state.all = products
  },

  RECEIVE_PRODUCT (state, product) {
    state.product = product
  },

  ADD_TO_CART (state, productId) {
    state.all
      .find(product => product.id === productId)
      .inventory--
  },

  REMOVE_FROM_CART (state, removedProduct) {
    state.all
      .find(product => product.id === removedProduct.id)
      .inventory += removedProduct.quantity
  }
}

export default {
  state,
  mutations

}
