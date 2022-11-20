<template>
  <Header />
  <get-data :posts="posts"/>

</template>

<script>
// export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String
//   }
// }

// @ is an alias to /src
import getData from "@/components/getData.vue";
import Header from "./header.vue" ;
import Footer from "./footer.vue"


export default {
  name: "HelloWorld",
  components: {
    getData ,
    Header ,
    Footer
  }
}
  
//   data: function() {
//     return {
    
//     posts:[    
//     /* example post structure:
//     {
//       "userId": 1,
//       "index": 1,
//       "author": "John Doe",
//       "email": "john.doe@ut.ee",
//       "profile_img": "res/images/me.png",
//       "date": "Sep 30, 2022",
//       "center_img": "res/images/autumn.jpeg",
//       "center_img_caption": "Autumn in Tartu 2022",
//       "message": "",
//       "like_button": "res/images/like_btn_icon.png"
//     },
//     {
//       "userId": 1,
//       "index": 2,
//       "author": "John Doe",
//       "email": "john.doe@ut.ee",
//       "profile_img": "res/images/me.png",
//       "date": "Oct 1, 2022",
//       "center_img": "",
//       "center_img_caption": "",
//       "message": "Why is 6 afraid of 7? 🤔",
//       "like_button": "res/images/like_btn_icon.png"
//     },  
//     */
//     ]
//     }
//     },
//     mounted() {
//       // fetch('http://myjson.dit.upm.es/api/bins/605q')
//       // fetch('@\src\assets\myjson.json')
//       fetch('https://api.npoint.io/054c02512e7ae401d479')
//       // fetch('https://jsonplaceholder.typicode.com/posts')
//        // fetch('http://localhost:3000/Posts') //using the local Json server
//         .then((response) => response.json())
//         .then(data => this.posts = data)
//         .catch(err => console.log(err.message))
//     }
// };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
