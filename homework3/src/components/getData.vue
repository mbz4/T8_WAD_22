<template>
    <!-- <h1> A simple example of using Fetch API</h1>
    <div class="post-list" v-for="post in posts"   :key="post.index">  
    <div class="post">
    <h3>  Title:  {{post.title}} </h3>
    <p>  <b> Body: </b> {{post.body}} </p>
    </div>
    </div>  
    TREE TEMPLATE: each post has this layout
        section 
            div0 << class: mini_container OR container post
                div1 << class: container_img
                    img << profile_img
                h5, << date
                br1, 
                div2 << class: center_img
                    img << center_img
                p1, << center_img_caption
                p2, << message
                br2, 
                div3 << class: container_img_like_btn
                    img << like_button  -->
    <section v-for="post in posts" :key="post.index">
        <div class="container post">
            <div class="container_img"> 
                <img :src="post.profile_img" width="50" height="50">
            </div>
            <h5> {{post.date}}</h5>
            <br>
            <div class="center_img">
            <!-- <img src="../assets/logo.png"> this works-->
            <img :src="post.center_img">
            </div>
            <p> {{post.center_img_caption}} </p>
            <br>
            <div class="container_img_like_btn"> 
                <img :src="post.like_button" width="30" height="30">
            </div>
        </div>
    </section>
</template>


<script>

// export default {
//     name: "getData",
//     props: ["posts"]
// }

import { mapActions, mapGetters } from "vuex";
export default {
    //   computed: {
    //     ...mapGetters(["countries"]),   
    computed: {
    countries () {
        return this.$store.getters.countries
    }},
  methods: {
    ...mapActions(["fetchAllCountries"]),
  },
  created() {
    this.fetchAllCountries();
  },
};
</script>

<style scoped>
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