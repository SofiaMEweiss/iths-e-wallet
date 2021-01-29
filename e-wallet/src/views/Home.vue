<template>
  <div class="home">
    <Card :activeCard="activeCardActive" />
    <p>Hej</p>
    <CardStack />
  </div>
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
  computed: {
    activeCardActive: function(){
      return this.$root.$data.cards[this.$root.$data.activeCardIndex];
    }
  }
};
</script>
