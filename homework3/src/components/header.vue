<!-- The header should be a component that appears on both “pages” of your App, 
and it should include navigation links/routes to both pages -->

<template>
    <nav class="Header">
      <div class="topnav-align">
        <router-link to="/">Main</router-link> |
        <router-link to="/signup">Signup</router-link>
      </div>
    </nav>
    <!-- <router-view/> -->
</template>
  
  <script>
  export default {
    name: 'header',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .topnav-align {
    float: center;
  }
  
  .Header {
    border-radius: 15px;
    background: #dedcdc;
    padding: 15px;
    padding-left: 45%;
    display: flex;
    font-family: 'Dancing Script', cursive;
    font-family: 'Merriweather Sans', sans-serif;
    position: fixed;
    width: 100%;
    top: 0;
    text-align: center;
    float: center;  
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
  
  </style>
  