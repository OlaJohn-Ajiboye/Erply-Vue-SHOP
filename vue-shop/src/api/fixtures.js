/* eslint-disable */
import axios from 'axios'

const url = 'https://erply-challenge.herokuapp.com/list?AUTH=fae7b9f6-6363-45a1-a9c9-3def2dae206d'

//dummmy data that will be replaced with axios call
let products = [
   {
"id": 1,
"image": "http://dummyimage.com/106x246.png/ff4444/ffffff",
"productcode": "76420-780",
"name": "Syrup - Golden, Lyles",
"description": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
"department": "Vegetarian",
"price": 51,
"currency": "EUR",
"store": "Finland",
"instock": false
}, {
  "id": 2,
  "image": "http://dummyimage.com/223x202.jpg/cc0000/ffffff",
  "productcode": "35418-750",
  "name": "Nantucket Orange Juice",
  "description": "Pellentesque ultrices mattis odio. Donec vitae nisi.",
  "department": "Healthy Food",
  "price": 48,
  "currency": "EUR",
  "store": "Finland",
  "instock": true
}, {
  "id": 3,
  "image": "http://dummyimage.com/162x156.jpg/cc0000/ffffff",
  "productcode": "63629-3211",
  "name": "Bread - Sticks, Thin, Plain",
  "description": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
  "department": "Vegan",
  "price": 100,
  "currency": "EUR",
  "store": "Finland",
  "instock": false
}
]



// Simulate requests

export default {
  getProfile (cb) {
    setTimeout(() => cb(profile), 200)
  },
  getProducts(cb) {
    axios.get(url).then(res => {
      products = res.data
      cb(products)
    }).catch(res => {
      console.log('error', res)
    })
    //setTimeout(() => cb(products), 200)
  },
}
