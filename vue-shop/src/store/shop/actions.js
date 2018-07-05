
export const storeProducts = ({ commit }, products) => {
  commit('RECEIVE_PRODUCTS', products)
}

export const singleProduct = ({ commit }, product) => {
  commit('RECEIVE_PRODUCT', product)
}

export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit('ADD_TO_CART', product.id)
  }
}

export const removeFromCart = ({ commit }, product) => {
  commit('REMOVE_FROM_CART', product)
}
