/* eslint-disable */
import axios from 'axios';

const url = 'https://erply-challenge.herokuapp.com/list?AUTH=fae7b9f6-6363-45a1-a9c9-3def2dae206d'

// Call API
export default {
  getProducts(cb) {
    axios.get(url).then(response => {
      let products = response.data;
      /* added the posibilty to enter inventory . This makes sure items can not be added to cart if it is out of stock.
      And can track remaining items in shop
      Add to cart button is disabled when item is out oF stock .Inventory for inStock  items is set to 100.  */ 
      for (const product of products) {
        if (product.instock === true) {
          product.inventory = 100;
        } else {
          product.inventory = 0;
        }
      }
      cb(products);
      console.log( products)
    }).catch(response => {
      console.log('error', response);
    });
  },
};
