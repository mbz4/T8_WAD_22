<template>

<br>
<div>  
   <Header/>

  <div>
    
    <form @submit.prevent ="validateForm">
    <label for="email">Email</label>
    <input type="email" placeholder="Email" required v-model="email">
    <label for="password">Password</label>
    <input type="password" placeholder="Password" required v-model="password">
    <div v-if="validatePassword" class="error"> {{validatePassword}}</div>
  
  <div class="submit">
      <button>Signup </button>
  </div>
  </form>
  
  </div> 
 </div>


 
</template>
  
  <script>
  
  import header from '../components/header.vue';
  

  export default {
  components: { header },
  name: "FormView", 
  header,
  
  
  data: function() {
      return {
     email: '',
     password: '',
     validatePassword:'',
    }},
    methods: {
     /* Validate password */
     validateForm(){
     console.log('signup is submitted');
    //  this.validatePassword = (this.password.length <8 || this.password> 15)? 'password must be between 8-15 chars':''
    //  console.log(this.validatePassword);
     
     let regex = /^[A-Z].*(?=(?:\D*[a-z]){2})]*.(?=(?:\D*\d){1})*.[A-Za-z0-9_]{4,15}$/
     console.log(regex.test(this.password));
     console.log(this.password);
     this.validatePassword = regex.test(this.password)? '':'password must be 8 - 15 characters in length & contain a combination of Uppercase characters (A-Z), Lowercase characters (a-z), Digits (0-9), and _'
     }
    }
  }
  </script>
  
  <style scoped>
  form {
    max-width: 420px;
    margin: 30px auto;
    background:  rgb(230, 249, 210);
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  
  label {
      color: rgb(0, 0, 0);
      display: inline-block;
      margin: 25px 0 15px;
      font-size: 0.8em;
      letter-spacing: 1px;
      font-weight: bold;
  }
  
  input{
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color: rgb(0, 0, 0);
  }
  input[type="checkbox"]{
      display: inline-block;
      width: 16px;
      margin:  0 10px 0 0;
      position: relative;
      top: 2px;
  }
  button{
  background:  rgb(128, 171, 221);
  border: 0;
  padding: 10px 20px;
  margin-top:  20px;
  color: rgb(0, 0, 0);
  border-radius: 20px;
  }
  h2, .submit{
      text-align: center;
  }
  .error{
      color: red;
      font-size: 0.8em;
      margin-top:  10px;
      text-align: center;
  }
  </style>