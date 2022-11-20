import { createStore } from 'vuex'

export default createStore({
    strict: true,
    state: {
            // productList should be placed here
            productList:[
                {id: 1, author: "Charlotte Bronte", book: "Jane Eyre", goodreads: "4.1/5", price: 20},
                {id: 2, author: "Margaret Mitchell", book: "Gone with the Wind", goodreads: "4.3/5", price: 22},
                {id: 3, author: "Anthony Burgess", book: "A Clockwork Orange", goodreads: "4/5", price: 13},
                {id: 4, author: "Fyodor Dostoevsky" , book: "Crime and Punishment", goodreads: "4.2/5", price: 18}
                ]
    },
  getters: {
    // .map is a higher-order function that creates a new array populated with the results of
    // calling a provided function on every element in the calling array. – Lecture 5

    productListsale: state => {
    var productListsale = state.productList.map(product => {
               return {
                   id: product.id,
                   author: product.author,
                   price: product.price / 2,
                   book: product.book,
                   goodreads: product.goodreads
               }
           });
           return productListsale
       },
      },
    mutations: {
           //The .forEach() method executes a callback function on each of the elements in an array in order. – Lecture 5
           IncreasePrice: state => {
            state.productList.forEach(product => {
                product.price += 1;
            })
        },
        DecreasePrice: state => {
            state.productList.forEach(product => {
                product.price -= 1;
            })
        }
    },
  actions: {
    IncreasePriceAct: act => {
        setTimeout(function() {
            act.commit("IncreasePrice")
        }, 1000)
    },
    DecreasePriceAct: act => {
        setTimeout(function() {
            act.commit("DecreasePrice")
        }, 1000)
    }
    }
})