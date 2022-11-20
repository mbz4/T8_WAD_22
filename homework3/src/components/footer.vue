<template>
 <div class="footer">
  <h4>@copyright2022</h4>
 </div>
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
  .footer{
    border-radius: 15px;
    background: #dedcdc;
    padding: 5px;
    position: relative;
    right: 2.9;
    bottom: 0;
    width: 100%;
    text-align: center;
    margin-top: 10px;
    font-family: 'Dancing Script', cursive;
    font-family: 'Merriweather Sans', sans-serif;
  }
  </style>
  
  <!-- The footer also should be a component that appears on both “pages” of your App, 
  and it should include some basic information that traditional footers include 
  (e.g., copyright, etc.) -->