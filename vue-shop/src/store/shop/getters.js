export const cartProducts = state => {
  return state.shoppingCart.added.map(({ id, quantity }) => {
    const product =
      state
        .products.all
        .find(product => product.id === id)

    return {
      ...product,
      quantity
    }
  })
}

export const itemsQuantity = state => {
  return cartProducts(state).reduce((quantity, item) => {
    return quantity + item.quantity
  }, 0)
}

export const subtotal = state => {
  const sum = cartProducts(state).reduce((subtotal, item) => {
    return subtotal + item.price * item.quantity
  }, 0)

  return sum
}

export const products = state => {
  return state.products.all
}

// $scope.products = response.data;

//           $scope.filtered =$scope.products.filter(a => {
//             return a.id == $scope.productId;
//           });

//           $scope.productDetails = $scope.filtered[0];
//           console.log($scope.filtered[0]);
//           $scope.products = response.data;

//           item() {
//             console.log(this.products)
//             let id = this.$route.params.id;
//             if (this.products.length >= id) {
//               let filterArr = this.products.filter((item) => {
//                 return item.id == id
//               });
//               if (filterArr.length > 0) {
//                 return filterArr[0];
//               }
//             }
//             return {};
//           }
