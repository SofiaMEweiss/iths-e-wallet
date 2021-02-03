<template>
  <section>
      <div class="cardstack">
          <div v-for="(card, index) of cardStack"
          :key="card.id" @click="onClick(index)"> 
          <Card
          :activeCard="card"
          />
          </div>
        </div>
  </section>
</template>

<script>
import Card from '../components/Card'
export default {

    components: {
        Card: Card
    },
computed: {
    cardStack(){
        return this.$root.$data.cards
    }

},
methods: {
    activeCard(id) {
        this.$root.activeCard(id)
    },

onClick(index) {
    this.$root.$data.activeCardIndex = index;
}}}
</script>

<style>
.cardstack {
    position: sticky;
    display: grid;
    grid-auto-rows: 100px;
}

</style>