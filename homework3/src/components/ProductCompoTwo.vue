<template>
    <!-- <div id= "comp-list-two">
    <h1> Book list two</h1>
    <p class="item" v-for="product in productList" :key="product.id">
    <span class="author"> <b>Author:</b> {{product.author}} </span>
    <span class="book"> <b>Message:</b> {{product.message}} </span> <br>
    <span class="goodreads"> <b>Date:</b> {{product.date}} </span>
    <span class="price"> Like:  {{product.like}} </span> 
    </p>
    </div> -->
    <br>
    <section v-for="product in productList" :key="product.id">
        <div class="container post">
            <div class="container_img"> 
                <!-- <img :src="post.profile_img" width="50" height="50"> -->
            </div>
            <h5> {{product.date}}</h5>
            <br>
            <div class="center_img">
                <!-- <img src="../assets/logo.png"> -->
                 <img :src="product.img"/>
            </div>
            <p> {{product.message}} </p>
            <br>
            <div class="container_img_like_btn"> 
                <button v-on:click="IncreasePrice "> Increase like </button>
                <span class="price"> {{product.like}}</span>
                <!-- <img :src="post.like_button" width="30" height="30"> -->
            </div>
        </div>
    </section>
    </template>
    
    
    <script>
    export default {
        name: "main",
        data: function() {
    return {
    
    }},
    computed: {
        productList(){
    return this.$store.state.productList
    }
    },
    methods: {
        IncreasePrice: function() {
            this.$store.dispatch("IncreasePriceAct")    
        }
    }}
    
    </script>
    
    <style scoped>
    .item{
    background: rgb(128, 183, 235);
    margin-bottom: 5px;
    padding: 3px 5px;}
    #comp-list-two{
    background: #1862c9;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
    }
    #comp-list-two ul{
    padding: 0;
    list-style-type: none;
    }
    #comp-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
    }
    .price{
    font-weight: bold;
    color: #860CE8;
    display: block;
    }
    span{
    margin-right: 10px;
    }


    body {
    position: relative;
}

/* .post {
    width: 80%;
    position: relative;
    padding: 10px;
    margin: 10px auto;
    border: 1px solid gray;
    text-align: left;
} */
.container_img {
  float: left;
  margin-left: 10px;
  margin-top: 10px;
}

.container_img_like_btn {
  float: left;
  margin-left: 20px;
  margin-top: -30px;
}

.center_img > img{
  float: center;
  max-width: 280px;
}

.container{ 
  text-align: center;
  background-color: #dedcdc;
  border-radius: 25px;
  
  height: 22em;
  width: 20em; 
  margin-left: auto;
  margin-right: auto;
  font-family: 'Dancing Script', cursive;
  font-family: 'Merriweather Sans', sans-serif;    
}
    </style>