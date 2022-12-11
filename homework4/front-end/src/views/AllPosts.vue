<template>
<div id = "grid"> 
  <div id ="column_left">
  </div>
  <div id="column_middle" >
    <div class="AllPosts">
      <div class="container">
      <button v-if = "authResult" @click="Logout" class="center">Logout</button>
      </div>
      <div id="post-list">
      <!-- <h1>Home</h1> -->
        <ul>
          <div class="item" v-for="post in posts" :key="post.id">
            <!-- / We are putting an anchor for each post, when we click on it, we will be directed to the specific post view (/apost/) /  -->
            <a class="singlepost" :href="'/api/apost/' + post.id">
              <span class="date"> {{ post.date }} </span>
              <br><br>
              <span class="body"> {{ post.body }} </span>
              <div>
                <br>
              </div>
            
            </a>
          </div>
          <div> 
            <a href="/api/addpost"> 
            <button @click="AddPost" class="AddPost">Add Post</button> </a>
            <button @click="deleteall" class="deleteall">Delete all</button>
          </div>
        </ul>
      </div>
    </div>
  </div>
  <div id="column_right">
  </div>
</div>
</template>


<script>
// @ is an alias to /src
import auth from "../auth";

export default {
  name: "AllPosts",
  // data() {
  //   return {
  //     posts: [],
  //   };
  // },
  data: function() {
    return {
    posts:[ ],
    authResult: auth.authenticated()
    }
  },

  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
    
    fetchPosts() {
      // You should remember how Fetch API works
      // fetch is a GET request unless stated otherwise. Therefore, it will fetch all posts from the database
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },

    deleteall() {
      // using Fetch - delete method - delets a specific post based on the passed id
      fetch(`http://localhost:3000/api/allposts/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.data);
          // We are using the router instance of this element to navigate to a different URL location
          this.$router.go("/api/allposts");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    // call fetchPosts() when this element (AllPosts) mounts 
    this.fetchPosts();
    console.log("mounted");
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
a {
  text-decoration: none;
}

.item {
  background: rgb(217, 217, 217);
  margin-bottom: 5px;
  padding: 3px 5px;
  border-radius: 10px;
}
#post-list {
  /* background: #ffffff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2); */
  margin-bottom: 30px;
  padding: 10px 20px;
  margin: auto;
  width: 50%;
  border-radius: 20px;
}
#post-list ul {
  padding: 0;
}
#post-list li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}


button {
    background: rgb(114, 174, 230);
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: rgb(0, 0, 0);
    border-radius: 20px;
    font-weight: bold;
  }

.AddPost{
  margin-right: 40px;
  }

.deleteall{
  margin-left: 40px;
}

.date{
  float: right;
  padding: 10px;
}

#grid {
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  grid-template-rows: auto;
  padding-top: 55px;
  
}

#column_left {
  background-color:#ccc;
  border-radius: 25px;
  margin-top: 1px;
  grid-column: 1/1;
  margin-bottom: 30px;
 
}

#column_middle {
  grid-column: 2/5;
}

#column_right {
  background-color:#ccc;
  grid-column:   5/6;
  border-radius: 25px;
  margin-top: 1px;
  margin-bottom: 30px;
}

</style>