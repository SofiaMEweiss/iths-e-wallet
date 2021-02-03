<template>
  <div class="home">
    <TopHeader :topHeading="topHeading" :subHeading="subHeading" />
    <div>
    <Card :activeCard="activeCardActive" />
    <button v-on:click="removeCard">REMOVE CARD</button>
    <CardStack />
    </div>
    <div>
    <button class="add-card-button" v-on:click="addCardButton">ADD NEW CARD</button>
  </div></div>
</template>

<script>
// @ is an alias to /src
import Card from "../components/Card";
import CardStack from "../components/CardStack";
import TopHeader from "../components/TopHeader";

export default {
  name: "Home",
  components: {
    Card : Card,
    CardStack: CardStack,
    TopHeader
  },

   data(){ return { 
      topHeading: "E-WALLET",
      subHeading: "ACTIVE CARD"

      }},

  methods: {
    addCardButton() {
      this.$router.push("/AddCard");
    },
    removeCard(){
      let confirmation = window.confirm("Are you sure you want to delete this card permanently?");
      if (confirmation === true){
      this.$root.$data.cards.splice(this.$root.$data.activeCardIndex, 1)

    }}},


  computed: {
    activeCardActive: function(){
      if(this.$root.$data.cards.length!=0){
      return this.$root.$data.cards[this.$root.$data.activeCardIndex];
    }
    else{
      return null;
    }}
  }
};
</script>
<style scoped>

 button {
  width: 450px;
  background-color: white;
  border: black solid 3px;
  border-radius: 7px;
  padding: 15px;
  font-size: 2rem;
  font-family: pt-mono, monospace;
  margin-top: 20px;
  margin-bottom: 20px;
}

.add-card-button {
   margin-top: 200px;
 }
</style>
