<template>
    <nav class="header">
        <router-link to="/">Main</router-link> |
        <router-link to="/signup">Signup</router-link>
    </nav>
    <router-view/>
</template>
  
  <script>
  export default {
    name: 'footer',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  .header {
  border-radius: 15px;
  background: #dedcdc;
  padding: 5px;
  display: flex;
  font-family: 'Dancing Script', cursive;
  font-family: 'Merriweather Sans', sans-serif;
  position: fixed;
  width: 100%;
  top: 0;
  
  }
  
  </style>
  