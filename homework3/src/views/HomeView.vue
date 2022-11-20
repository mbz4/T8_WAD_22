<template>
  <div class="products">
   <br>
   <h2> Our Products page</h2>
   <product-compo-two></product-compo-two>

   <button v-on:click="IncreasePrice "> Increase price </button>
  </div>
 </template>
 
 <script>
 
 import ProductCompoTwo from "@/components/ProductCompoTwo.vue";
 
 export default {
 name: "Products",
 components: { ProductCompoTwo },
 data: function() {
 return {
 }},
 
 methods: {
 IncreasePrice: function() {
   //this.$store.commit("IncreasePrice")
   this.$store.dispatch("IncreasePriceAct")
 
     /*
     When using the strict mode in the vuex store, we cannot mutate state outside mutation handlers.
     Therefore, using the following function will produce an error
     
     this.$store.state.productList.forEach(product => {
         product.price += 1;
         }) 
     */
 },
 DecreasePrice: function() {
   //this.$store.commit("DecreasePrice")
   this.$store.dispatch("DecreasePriceAct")
 }
 
 }
 }
 </script>
 
 <style scoped>
 button{
 background:  rgb(31, 163, 163);
 border: 0;
 padding: 10px 20px 10px 20px;
 margin-top:  20px;
 margin-bottom:  20px;
 margin-right:  10px;
 color: white;
 border-radius: 20px;
 }
 </style>
 