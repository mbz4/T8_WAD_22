<!-- The header should be a component that appears on both “pages” of your App, 
and it should include navigation links/routes to both pages -->

<template>
    <nav class="Header">
        <router-link to="/">Main</router-link> |
        <router-link to="/signup">Signup</router-link>
    </nav>
    <router-view/>
</template>
  
  <script>
  export default {
    name: 'Header',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  .Header {
  border-radius: 12px;
  background: #dedcdc;
  padding: 5px;
  display: flex;
  font-family: 'Dancing Script', cursive;
  font-family: 'Merriweather Sans', sans-serif;
  position: fixed;
  width: 98%;
  top: 0;
  }

  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  } 
  
  </style>
  