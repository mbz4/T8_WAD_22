<template>
  <!-- <nav>
    <router-link to="/">Main</router-link> |
    <router-link to="/signup">Signup</router-link>
  </nav> -->
  <div>
    <router-view/>
  <Header/>
  <Footer/>
  </div>
  
</template> 



<script setup>
 import Header from '@/components/header.vue';
 import Footer from '@/components/footer.vue';
</script>


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
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
