import { createStore } from 'vuex'

export default createStore({
    strict: true,
    state: {
            // productList should be placed here
            productList:[
                {id: 1, author: "John Doe", message: "Autumn in Tartu 2022", img: "../autumn.jpeg", date: "Sep 30, 2022", like: 0},
                {id: 2, author: "John Doe", message: "#Blue Sky \n #Snowy Mountains", img: "../sky_high.jpeg", date: "Oct 11, 2022", like: 13},
                {id: 3, author: "John Doe", message: "Why is 6 afraid of 7? 🤔 \n Because 7 '8' 9! 😂", date: "Oct 1, 2022", like: 22},
                {id: 4, author: "John Doe", message: "Late Autumn!", img: "../lateAutumn.jpeg", date: "Oct 30, 2022", like: 13},
                {id: 5, author: "John Doe", message: "Q: What do computers and air conditioners have in common? 🤔", date: "Nov 1, 2022", like: 13},
                {id: 6, author: "John Doe", message: "A: They both become useless when you open windows 😉", date: "Nov 5, 2022", like: 13},
                {id: 8, author: "Shelly White", message: "How many programmers does it take to change a lightbulb? 💡 \n It’s a hardware problem. 🤓", date: "Nov 8, 2022", like: 13},
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