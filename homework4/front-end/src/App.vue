<template>
  <div>
    <nav>
      <!-- <router-link to="/api/allposts">Home</router-link> | -->
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/api/addpost">Add a Post</router-link> |  -->
      <router-link to="/contactus">Contacts</router-link>
      <!-- | <router-link to="/signup">SignUp</router-link> |
      <router-link to="/login">LogIn</router-link> -->
    </nav>
    <router-view />
  </div>
  <div class="footer">
    <p>©2022 by Team8 / Group AT</p>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: #bbbbbb;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #5c5d5e;
}

.footer {
  background-color: #bbbbbb;
  padding: 10px;
  text-align: center;
  font-weight: bold;
}
</style>
