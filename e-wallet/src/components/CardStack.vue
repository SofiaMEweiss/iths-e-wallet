<template>
  <div>
      <p>YOUR WALLET</p>
      <div>
          <Card 
          v-for="card of cardStack"
          :key="card.id"
          :activeCard="card"
          />
        </div>
  </div>
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
    }
}
}
</script>

<style>

</style>