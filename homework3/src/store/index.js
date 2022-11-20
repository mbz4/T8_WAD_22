import { createStore } from 'vuex'

export default createStore({
    strict: true,
    state: {
            // productList should be placed here
            productList:[
                {id: 1, author: "John Doe", message: "Autumn in Tartu 2022", img: "../autumn.jpeg", date: "Sep 30, 2022", like: 0},
                {id: 2, author: "Margaret Mitchell", message: "Gone with the Wind", img: "../autumn.jpeg", date: "4.3/5", like: 22},
                {id: 3, author: "Anthony Burgess", message: "A Clockwork Orange", img: "../autumn.jpeg", date: "4/5", like: 13},
                {id: 4, author: "Fyodor Dostoevsky" , message: "Crime and Punishment", img: "../autumn.jpeg", date: "4.2/5", like: 18}
                // {
                //   "userId": 1,
                //   "index": 1,
                //   "author": "John Doe",
                //   "email": "john.doe..ut.ee",
                //   "profile_img": "../assets/me.png",
                //   "date": "Sep 30, 2022",
                //   "center_img": "../assets/autumn.jpeg",
                //   "center_img_caption": "Autumn in Tartu 2022",
                //   "message": "",
                //   "like_button": "../assets/like_btn_icon.png"
                // }
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