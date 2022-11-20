import { createStore } from 'vuex'

// inspiration from: https://medium.com/@esmaydogdu/vuex-fetch-b0e8472e7676

export default createStore({
  strict: true,
  state: {
    postsList:[]
  },
  getters: {
    // .map is a higher-order function that creates a new array populated with the results of
    // calling a provided function on every element in the calling array. – Lecture 5
    productListsale: state => {
      var likeList = state.likeList.map(product => {
          return {
              index: product.index,
              author: product.author,
              price: product.price / 2,
              book: product.book,
              goodreads: product.goodreads
          }
      });
      return likeList
    },
    countries(state) {
      return state.countries;
    }
  },
  mutations: {
    setCountries(state, countries) {
      state.countries = countries;
    },  
    //The .forEach() method executes a callback function on each of the elements in an array in order. – Lecture 5
    IncreasePrice: state => {
      state.likeList.forEach(product => {
      product.price += 1;
      })
    },
    DecreasePrice: state => {
      state.likeList.forEach(product => {
        product.price -= 1;
      })
    }
  },
  actions: {
    fetchAllCountries(context) {
      return fetch("https://api.npoint.io/054c02512e7ae401d479")
      .then((response) => response.json())
      .then((data) => {
        context.commit("setCountries", data);
      })
      .catch((err) => console.error(err));
    },
  }
})