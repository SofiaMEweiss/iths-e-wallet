<template>
  <div class="home">
    <div>
    <Card :activeCard="activeCardActive" />
    <p>Hej</p>
    <CardStack />
    </div>
    <div>
    <button v-on:click="addCardButton">ADD NEW CARD</button>
  </div></div>
</template>

<script>
// @ is an alias to /src
import Card from "../components/Card";
import CardStack from "../components/CardStack";

export default {
  name: "Home",
  components: {
    Card : Card,
    CardStack: CardStack
  },

  methods: {
    addCardButton() {
      this.$router.push("/AddCard");
    }},


  computed: {
    activeCardActive: function(){
      return this.$root.$data.cards[this.$root.$data.activeCardIndex];
    }
  }
};
</script>
<style scoped>
 button {
   margin-top: 200px;
 }
</style>
