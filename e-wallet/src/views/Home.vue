<template>
  <section class="container">
    <TopHeader :topHeading="topHeading" />
      <section v-if="activeCard==null">
        <p>YOU HAVE NOT SELECTED A CARD</p>
      </section>
      <section v-else>
        <TopHeader :subHeading="subHeading" />
        <CreditCard :newCard="activeCard" />
        <button  class="remove-button" v-on:click="removeCard">REMOVE CARD</button>
      </section>
      <h2>YOUR CARDS</h2>
      <CardStack />
      <p>YOUR WALLET IS EMPTY</p>
      <button v-on:click="addCardButton">ADD NEW CARD</button>
  </section>
</template>

<script>
import CreditCard from "../components/CreditCard";
import CardStack from "../components/CardStack";
import TopHeader from "../components/TopHeader";

export default {

  components: {
    CreditCard,
    CardStack,
    TopHeader
  },

  data(){ return { 
    topHeading: "E-WALLET",
    subHeading: "ACTIVE CARD"
  }},

  methods: {
    addCardButton(){
      this.$router.push("/AddCard");
    },

    removeCard(){
      let confirmation = window.confirm("Are you sure you want to delete this card permanently?");
      if (confirmation === true){
      this.$root.$data.cards.splice(this.$root.$data.activeCardIndex, 1)
      }
    }
  },

  computed: {
    activeCard: function(){
      if(this.$root.$data.cards.length!=0){
      return this.$root.$data.cards[this.$root.$data.activeCardIndex];
      }
      else{
      return null;
      }
    }
  }
};
</script>

<style scoped>
.container {
  min-height: 900px;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 40px;
  background-color: rgb(252, 244, 241);
}

 button {
  width: 450px;
  background-color: white;
  border: black solid 3px;
  border-radius: 7px;
  padding: 15px;
  font-size: 2rem;
  font-family: pt-mono, monospace;
  margin-top: 20px;
}

button:hover {
  background-color: rgb(233, 212, 203);
}

.remove-button{
  width: 250px;
  border: red solid 3px;
}

.remove-button:hover {
  background-color: rgb(192, 86, 86);
  color: white;
}

 h2{
   font-size: 2rem;
 }
 
 p{
   color: grey;
   padding: 120px 0px;
 }
</style>
