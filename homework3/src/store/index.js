import { createStore } from 'vuex'

export default createStore({
    strict: true,
    state: {
            // productList should be placed here
            productList:[
                {id: 1, author: "John Doe", message: "Autumn in Tartu 2022", img: "../autumn.jpeg", date: "Sep 30, 2022", like: 0},
                {id: 2, author: "Margaret Mitchell", message: "Gone with the Wind", img: "../autumn.jpeg", date: "Oct 1, 2022", like: 22},
                {id: 3, author: "Anthony Burgess", message: "A Clockwork Orange", img: "../autumn.jpeg", date: "Oct 1, 2022", like: 13},
                {id: 4, author: "Anthony Burgess", message: "A Clockwork Orange", img: "../autumn.jpeg", date: "Oct 1, 2022", like: 13},
                {id: 5, author: "Anthony Burgess", message: "Because 7 '8' 9! 😂", img: "../autumn.jpeg", date: "Oct 1, 2022", like: 13},
                {id: 6, author: "Anthony Burgess", message: "A Clockwork Orange", img: "../autumn.jpeg", date: "Oct 1, 2022", like: 13},
                {id: 7, author: "Anthony Burgess", message: "A Clockwork Orange", img: "../autumn.jpeg", date: "Oct 1, 2022", like: 13},
                {id: 8, author: "Anthony Burgess", message: "A Clockwork Orange", img: "../autumn.jpeg", date: "Oct 1, 2022", like: 13},
                {id: 9, author: "Anthony Burgess", message: "A Clockwork Orange", img: "../autumn.jpeg", date: "Oct 1, 2022", like: 13},
                {id: 10, author: "Anthony Burgess", message: "A Clockwork Orange", img: "../autumn.jpeg", date: "Oct 1, 2022", like: 13},                
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
                   like: product.like /2,
                   message: product.message,
                   date: product.date,
                   img: product.img
               }
           });
           return productListsale
       },
      },
    mutations: {
           //The .forEach() method executes a callback function on each of the elements in an array in order. – Lecture 5
           IncreasePrice: state => {
            state.productList.forEach(product => {
                product.like += 1;
            })
        },
        ResetLike: state => {
            state.productList.forEach(product => {
                product.like = 0;
            })
        }
    },
  actions: {
    IncreasePriceAct: act => {
        setTimeout(function() {
            act.commit("IncreasePrice")
        }, 1000)
    },
    ResetLikeAct: act => {
        setTimeout(function() {
            act.commit("ResetLike")
        }, 1000)
    }
    }
})