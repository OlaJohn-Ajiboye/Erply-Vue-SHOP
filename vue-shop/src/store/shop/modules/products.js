const state = {
  isLoading: true,
  all: []

}

const mutations = {
  RECEIVE_PRODUCTS (state, products, isLoading) {
    state.all = products
    state.isLoading = false
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

const getters = {
  isPLoading: (state) => {
    return state.isLoading
  }
}

export default {
  state,
  mutations,
  getters

}
